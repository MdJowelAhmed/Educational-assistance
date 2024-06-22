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
import PaymentPage from "../pages/payment/PaymentPage";
import ManageUsers from "../dashbord/admin/manageUsers/ManageUsers";
import AllReview from "../dashbord/moderator/allReview/AllReview";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Statics from "../dashbord/Statics";
import AllAppliedScholarship from "../dashbord/moderator/allAppliedScholarship/AllAppliedScholarship";
import ApplyPage from "../pages/modal/ApplyPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
                path:'/payment/:id',
                element:<PaymentPage></PaymentPage>
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
                path:'statics',
                element:<Statics></Statics>
            },
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
            {
                path:'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path:'allApplied',
                element: <AllAppliedScholarship></AllAppliedScholarship>
            },
           
            {
                path:'allReview',
                element:<AllReview></AllReview>
            },
            {
                path:'applyPage/:id',
                element:<ApplyPage></ApplyPage>
            },
        ]
    }
])

export default router