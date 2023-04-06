import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import DateTimePicker from 'react-datetime-picker';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Task from './Task';

const Dashboard = () => {
    const { user: currentUser } = useContext(AuthContext)
    let [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [value, onChange] = useState(new Date());

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { data: allTask, isLoading, refetch } = useQuery({
        queryKey: ['todos', currentUser?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/api/todos?email=${currentUser?.email}`)
            const data = await res.json()
            return data;
        }
    })
    console.log(allTask);
    const handleTaskSubmit = data => {
        const title = data.title;
        const description = data.details;
        const user = currentUser.email
        const task = { title, description, due: value, user }
        fetch(`http://localhost:8000/api/todo/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data === 'todo Added Successfully!') {
                    toast.success('Your Task added')
                    reset()

                }
            })
        setOpen(false)

    }
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center space-y-3'>
                <h1 className='text-center mt-16 text-3xl font-medium'>Task list</h1>
                <button onClick={() => setOpen(true)} className=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50">Add Task</button>
            </div>

            <div className='space-y-3 mt-16'>
                {allTask.map((task, i) => <Task key={task._id} task={task} refetch={refetch} i={i}></Task>)}
            </div>




            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <form onSubmit={handleSubmit(handleTaskSubmit)} className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                            </div> */}
                                            <div className="mt-3 text-center  sm:mt-0 sm:text-left">

                                                <input {...register('title', { required: 'Title must be required' })} type="text" placeholder='Task Name' className='w-full border-2 rounded py-2 pl-2 border-slate-300' />
                                                {errors.title && <p className='text-red-500'>{errors.title?.message}</p>}
                                                <div className="mt-2">
                                                    <textarea {...register('details', { required: 'Title must be required' })} cols='60' rows="6" placeholder='Description' className='border-2 rounded py-2 pl-2 border-slate-300'></textarea>
                                                </div>
                                                <p>Set time</p>
                                                <DateTimePicker onChange={onChange} value={value} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="Submit"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        >
                                            Add
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            ref={cancelButtonRef}
                                            onClick={() => setOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </form>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default Dashboard;