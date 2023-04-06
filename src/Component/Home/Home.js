import React from 'react';
import bannerImage from '../../asset/pexels-andrea-piacquadio-3774903.jpg'
import underBanner from '../../asset/pngegg.png'
import amazon from '../../asset/CompanyLogo/pngegg (1).png'
import desney from '../../asset/CompanyLogo/pngegg (2).png'
import adobe from '../../asset/CompanyLogo/pngegg.png'
import ExtraSection from './ExtraSection';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-16 mx-auto text-center">
                <div className="max-w-xl mx-auto md:pt-24 lg:pt-48">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-6xl ">Organize your
                        work and life, finally.</h1>
                    <p className="mt-6 text-gray-500 dark:text-gray-300 ">Become focused, organized, and calm with TaskZen. The world’s #1 task manager and TaskZen list app.</p>
                    <Link to={'/dashboard'}>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-primary rounded-lg hover:bg-secondary lg:mx-0 lg:w-auto focus:outline-none">
                            Start for free
                        </button>
                    </Link>
                </div>

                <div className="flex justify-center flex-col items-center relative mt-10">
                    <img className="object-cover w-full h-[420px] rounded-xl lg:w-4/5" alt='' src={bannerImage} />

                </div>

            </div>
            <div className=' w-full   py-10 -bottom-0 bg-[#fae8d5]'>
                <div className='flex justify-center md:space-x-20 px-2'>
                    <div className='text-left space-y-2 '>
                        <p>300,000+ REVIEWS</p>
                        <div className="flex">
                            <svg className="h-4 w-4 shrink-0 fill-amber-500" aria-hidden="true" viewBox="0 0 256 256">
                                <path
                                    d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59.4-4.1-22-55.5A16.4,16.4,0,0,0,128,16h0a16.4,16.4,0,0,0-15.2,10.4L90.4,82.2,31.4,86A16.5,16.5,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.4,38.4L53.9,207a18.5,18.5,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.5,16.5,0,0,0,15.8-20.8l-14.3-58.1L234,115.5A16.8,16.8,0,0,0,239.2,97.4Z"></path>
                            </svg>
                            <svg className="h-4 w-4 shrink-0 fill-amber-500" aria-hidden="true" viewBox="0 0 256 256">
                                <path
                                    d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59.4-4.1-22-55.5A16.4,16.4,0,0,0,128,16h0a16.4,16.4,0,0,0-15.2,10.4L90.4,82.2,31.4,86A16.5,16.5,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.4,38.4L53.9,207a18.5,18.5,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.5,16.5,0,0,0,15.8-20.8l-14.3-58.1L234,115.5A16.8,16.8,0,0,0,239.2,97.4Z"></path>
                            </svg>
                            <svg className="h-4 w-4 shrink-0 fill-amber-500" aria-hidden="true" viewBox="0 0 256 256">
                                <path
                                    d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59.4-4.1-22-55.5A16.4,16.4,0,0,0,128,16h0a16.4,16.4,0,0,0-15.2,10.4L90.4,82.2,31.4,86A16.5,16.5,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.4,38.4L53.9,207a18.5,18.5,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.5,16.5,0,0,0,15.8-20.8l-14.3-58.1L234,115.5A16.8,16.8,0,0,0,239.2,97.4Z"></path>
                            </svg>
                            <svg className="h-4 w-4 shrink-0 fill-amber-500" aria-hidden="true" viewBox="0 0 256 256">
                                <path
                                    d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59.4-4.1-22-55.5A16.4,16.4,0,0,0,128,16h0a16.4,16.4,0,0,0-15.2,10.4L90.4,82.2,31.4,86A16.5,16.5,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.4,38.4L53.9,207a18.5,18.5,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.5,16.5,0,0,0,15.8-20.8l-14.3-58.1L234,115.5A16.8,16.8,0,0,0,239.2,97.4Z"></path>
                            </svg>
                            <svg className="h-4 w-4 shrink-0 fill-amber-500" aria-hidden="true" viewBox="0 0 256 256">
                                <path
                                    d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59.4-4.1-22-55.5A16.4,16.4,0,0,0,128,16h0a16.4,16.4,0,0,0-15.2,10.4L90.4,82.2,31.4,86A16.5,16.5,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.4,38.4L53.9,207a18.5,18.5,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.5,16.5,0,0,0,15.8-20.8l-14.3-58.1L234,115.5A16.8,16.8,0,0,0,239.2,97.4Z"></path>
                            </svg>
                        </div>
                        <p className='text-lg font-medium'>App Store and Google Play</p>
                    </div>
                    <div className='space-y-4'>
                        <p className=''>USED BY INDIVIDUALS AND TEAMS AT</p>
                        <div className='flex items-center justify-evenly'>
                            <img className='w- h-12' src={adobe} alt="" />
                            <img className='w-20 mr-3' src={amazon} alt="" />
                            <img className='w-20 ' src={desney} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ExtraSection />
            <Footer></Footer>
        </section >
    );
};

export default Home;