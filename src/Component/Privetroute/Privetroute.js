import React, { useContext } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Privetroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(loading);
    const location = useLocation();
    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperclassName="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to={'/login'} state={{ from: location }}></Navigate>
    }
};

export default Privetroute;