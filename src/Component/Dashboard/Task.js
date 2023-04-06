import React, { Fragment, useState, useRef } from 'react';
import { BiTrash } from "react-icons/bi";
import { Dialog, Transition } from '@headlessui/react'
import DateTimePicker from 'react-datetime-picker';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { toast } from 'react-hot-toast';

const Task = ({ task, refetch, i }) => {

    const [itemOpen, setItemOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [value, onChange] = useState(task.due);
    const [newTitle, setNewTitle] = useState(task.title)
    const [newDescriptions, setNewDescription] = useState(task.description)
    const [isActive, setIsActive] = useState(true)

    const handleTaskUpdate = (id) => {
        const title = newTitle;
        const description = newDescriptions;
        const user = task.user
        const updateTask = { title, description, due: value, user }
        console.log(updateTask);
        fetch(`https://taskzen.onrender.com/api/todo/update/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message)
                refetch()
            })
        setItemOpen(false)

    }

    const handleTaskDelete = (id) => {
        fetch(`https://taskzen.onrender.com/api/todo/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message === 'todo Deleted Successfully!') {
                    toast.success(data.message)
                    refetch()
                }
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            <div className='lg:w-3/6 md:w-5/6 w-full border-l-4  bg-slate-100 border-secondary shadow mx-auto  px-5 flex justify-between items-center'>
                <div onClick={() => setItemOpen(true)} className=' w-11/12 py-4'>
                    <p className='text-lg font-medium'>{i + 1}. {task.title}</p>

                </div>
                <BiTrash onClick={() => handleTaskDelete(task._id)} className=' hover:text-primary bg--600 text-xl' />
            </div>
            <Transition.Root show={itemOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => [setItemOpen, setIsActive(true)]}>
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
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                    <form className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">

                                            <div className="mt-3 text-center  sm:mt-0 sm:text-left">
                                                <p className='font-semibold'>Title</p>
                                                <input defaultValue={newTitle} onChange={(e) => setNewTitle(e.target.value)} disabled={isActive === true} type="text" placeholder='Task Name' className='w-full border-2 rounded py-2 pl-2 border-slate-300' />
                                                <p className='font-semibold mt-2'>Descriptions</p>
                                                <div >
                                                    <textarea defaultValue={newDescriptions} onChange={(e) => setNewDescription(e.target.value)} disabled={isActive === true} cols='40' rows="6" placeholder='Description' className='border-2 rounded py-2 pl-2 border-slate-300'></textarea>
                                                </div>
                                                <p className='font-semibold '>Set time</p>
                                                <DateTimePicker onChange={onChange} disabled={isActive === true} value={value} />
                                            </div>
                                        </div>

                                    </form>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        {isActive ? <button
                                            onClick={() => setIsActive(false)}
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                        >
                                            Edit
                                        </button> : <button
                                            onClick={() => handleTaskUpdate(task._id)}
                                            type="Submit"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        >
                                            Submit
                                        </button>}
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            ref={cancelButtonRef}
                                            onClick={() => { setItemOpen(false); setIsActive(true); }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>

                    </div>
                </Dialog>
            </Transition.Root>
        </>

    );
};

export default Task;