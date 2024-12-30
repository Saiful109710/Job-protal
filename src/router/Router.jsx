import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/myApplication/myApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/ViewApplication/ViewApplication";




const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/jobDetails/:id',
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:7000/jobs/${params.id}`)
            },
            {
                path:'/jobApply/:id',
                element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path:'/myApplications',
                element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
            },
            {
                path:'/viewApplications/:job_id',
                element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>
            },
            {
                path:'/addJob',
                element:<AddJob></AddJob>
            },
            {
                path:'/myPostedJob',
                element:<MyPostedJobs></MyPostedJobs>
            }
        ]
    }
])


export default router