import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Register = () => {
    const { createUser, updateUserProfile, emailVerification, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const imageHostKey = process.env.REACT_APP_imageKey;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUp = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const image = data.image[0];
        console.log(name, email, password, image);


        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const imageUrl = data.data.display_url;
                createUser(email, password)
                    .then(result => {
                        const user = result.user;
                        updateUserProfile(name, imageUrl)
                            .then(() => {
                                emailVerification()
                                    .then(() => {
                                        const userDetails = { email }
                                        fetch(`http://localhost:8000/api/user/add`, {
                                            method: 'POST',
                                            headers: {
                                                'content-type': 'application/json'
                                            },
                                            body: JSON.stringify(userDetails)
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                console.log(data)

                                                toast.success('your account sing up successfully')
                                                toast.alert('check your email for verification')
                                                navigate(from, { replace: true })
                                            })



                                    })
                                    .catch(err => console.log(err))
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.error(err))

            })
            .catch(err => console.log(err))
    }

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const email = user.email;
                const userDetails = { email }
                fetch(`http://localhost:8000/api/user/add`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        navigate(from, { replace: true })
                        toast.success('your google sing up successfully')
                    })
            })
            .catch(e => console.log(e))
    }
    return (

        <section class="bg-white dark:bg-gray-900">
            <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form onSubmit={handleSubmit(handleSignUp)} class="w-full max-w-md">


                    <h1 class="mt-3 text-2xl text-center font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Sign Up</h1>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Name</label>
                        <input {...register('name', { required: 'Name must be required' })} id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Email</label>
                        <input {...register('email', { required: 'Email must be required' })} id="loggingemail" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                        <input {...register('password', { required: 'Password required must', minLength: { value: 6, message: 'password must be 6 characters or longer' } })} id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <label for="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>

                        <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                        <input {...register('image', { required: 'image must be required' })} name='image' id="dropzone-file" type="file" className="hidden" accept="image/*" />
                        {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}

                    </label>



                    <div class="mt-6">
                        <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign in
                        </button>

                        <p class="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

                        <Link onClick={handleGoogleSignUp} class="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <svg class="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>

                            <span class="mx-2">Sign in with Google</span>
                        </Link>

                        <div class="mt-6 text-center ">
                            <Link to={'/login'} class="text-sm text-primary hover:underline ">
                                Already have an account! Sign in
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;