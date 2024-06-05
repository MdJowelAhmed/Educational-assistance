import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex ">
            <div className="w-60 h-full bg-gray-300">
                <Link to='/dashboard/addScholarship'>Add scholarship</Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;