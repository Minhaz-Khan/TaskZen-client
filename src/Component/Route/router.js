
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../LayOut/Main";
import SignIn from "../User/SignIn";
import Register from "../User/Register";
import Dashboard from "../Dashboard/Dashboard";
import PrivetRoute from "../Privetroute/Privetroute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>
            },
        ]
    }
])

export default router;