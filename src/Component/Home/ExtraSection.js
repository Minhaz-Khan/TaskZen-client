import React from 'react';
import img from '../../asset/get-more-done-1008.webp'
import img2 from '../../asset/clear-your-mind-1008.webp'

const ExtraSection = () => {
    return (
        <>
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6   md:flex-row md:items-center">
                <div className="flex flex-col items-center justify-end w-full lg:flex-row lg:w-1/2">
                    <div className="max-w-lg  lg:order-2">
                        <p>Get more done</p>
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Add your tasks.
                            Organize your life.
                            Achieve more every day.</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">Add tasks like “Read work emails every day at 10am” to fill your to-do list in seconds using Todoist’s powerful natural language recognition and recurring dates.</p>

                    </div>
                </div>

                <div className="flex items-center  w-full  lg:w-1/2">
                    <img className="lg:h-[450px] rounded-md lg:ml-20" src={img} alt='' />
                </div>
            </div>
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6  md:py-16 md:flex-row md:items-center">


                <div className="flex items-center justify-center w-full  lg:w-1/2">
                    <img className="lg:h-[450px] rounded-md " src={img2} />
                </div>
                <div className="flex flex-col items-center  w-full lg:flex-row lg:w-1/2">
                    <div className="max-w-lg  lg:order-2">
                        <p>Clear your mind</p>
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Add your tasks.
                            Reach that mental clarity you’ve been longing for.</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">Your to-do lists are automatically sorted into Today, Upcoming and custom Filter views to help you focus on your most important things.</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ExtraSection;