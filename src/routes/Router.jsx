import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../pages/Home/Home";
import AllScholarship from "../pages/Home/AllScholarship/AllScholarship";
import Register from "../authentication/Register";

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
        ]
    }
])

export default router