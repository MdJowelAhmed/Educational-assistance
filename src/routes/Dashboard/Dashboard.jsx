import { Link, Outlet } from "react-router-dom";
import SidebarLinks from "../../dashbord/SideBarLinks/SidebarLinks";
import { MdDashboard, MdLibraryAdd, MdManageHistory } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import AdminMenubar from "../../pages/Menubar/AdminMenubar";

import ModeratorMenuBar from "../../pages/Menubar/ModeratorMenuBar";
import User from "../../pages/Menubar/User";


const Dashboard = () => {
    const [role] = useRole()
    return (
        <div className="flex gap-4 lg:gap-10 m-5 lg:m-16">
            <div className="w-72 h-full bg-amber-50 lg:p-6 rounded-2xl">
                <SidebarLinks label={'Statics'} address={'/dashboard/statics'} icon={MdDashboard}></SidebarLinks>
                {
                    role === 'admin' && <AdminMenubar></AdminMenubar>

                }

                {
                    role === 'moderator' && <ModeratorMenuBar></ModeratorMenuBar>

                },
                {
                    role === 'normalUser' && <User></User>
                }

                <div className="mt-10">
                    <SidebarLinks label={'Home'} address={'/'} icon={HiHome}></SidebarLinks>
                </div>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;