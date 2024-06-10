import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../pages/Home/Home";
import AllScholarship from "../pages/Home/AllScholarship/AllScholarship";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
// import Dashboard from "../dashbord/Dashboard";
import AddScholarship from "../dashbord/moderator/addScholarship/AddScholarship";
import Dashboard from "./Dashboard/Dashboard";
import ManageScholarship from "../dashbord/moderator/manageScholarship/ManageScholarship";
import ModeratorProfile from "../dashbord/moderator/moderatorProfile/ModeratorProfile";
import ViewDetails from "../pages/Details/ViewDetails";

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
                path:'/viewDetails/:id',
                element:<ViewDetails></ViewDetails>
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
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'addScholarship',
                element:<AddScholarship></AddScholarship>
            },
            {
                path:'manageScholarship',
                element:<ManageScholarship></ManageScholarship>
            },
            {
                path:'moderatorProfile',
                element:<ModeratorProfile></ModeratorProfile>
            },
        ]
    }
])

export default router