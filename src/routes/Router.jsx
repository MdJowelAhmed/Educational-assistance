import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../pages/Home/Home";
import AllScholarship from "../pages/Home/AllScholarship/AllScholarship";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import Dashboard from "../dashbord/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allScholarship',
                element:<AllScholarship></AllScholarship>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
])

export default router