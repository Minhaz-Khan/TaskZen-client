import React from 'react';
import { BiEdit, BiTrash } from "react-icons/bi";

const Task = ({ task, refetch, i }) => {
    const taskThemeColor = [
        {
            praimay: ''
        }
    ]
    return (
        <div className='w-3/6 border-l-4 border-blue-500 bg-slate-500 mx-auto py-4 px-5'>
            <div className='flex justify-between'>
                <p className=''>{i + 1}. {task.title}</p>
                <div className='flex space-x-2'>
                    <BiEdit className='hover:text-green-500' />
                    <BiTrash className='hover:text-primary' />
                </div>
            </div>
        </div>
    );
};

export default Task;