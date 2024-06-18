import { MdLibraryAdd, MdManageHistory } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import SidebarLinks from "../../dashbord/SideBarLinks/SidebarLinks";
import { RxAvatar } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { HiHome } from "react-icons/hi";


const AdminMenubar = () => {

    return (
        <div>
            <SidebarLinks label={'Add Scholarship'} address={'/dashboard/addScholarship'} icon={MdLibraryAdd}></SidebarLinks>

            <SidebarLinks label={'Manage Scholarship'} address={'/dashboard/manageScholarship'} icon={MdManageHistory}></SidebarLinks>

            <SidebarLinks label={'Admin Profile'} address={'/dashboard/moderatorProfile'} icon={RxAvatar}></SidebarLinks>

            <SidebarLinks label={'Manage Users'} address={'/dashboard/manageUsers'} icon={BsPeople}></SidebarLinks>

           
        </div>
    );
};

export default AdminMenubar;