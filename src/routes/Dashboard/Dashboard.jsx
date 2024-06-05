import { Link, Outlet } from "react-router-dom";
import SidebarLinks from "../../dashbord/SideBarLinks/SidebarLinks";
import { MdLibraryAdd, MdManageHistory } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="flex gap-4 lg:gap-10 m-5 lg:m-16">
            <div className="w-72 h-full bg-amber-50 lg:p-6 rounded-2xl">
                <SidebarLinks label={'Add Scholarship'} address={'/dashboard/addScholarship'} icon={MdLibraryAdd}></SidebarLinks>

                <SidebarLinks label={'Manage Scholarship'} address={'/dashboard/manageScholarship'} icon={MdManageHistory}></SidebarLinks>
            </div>
           
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;