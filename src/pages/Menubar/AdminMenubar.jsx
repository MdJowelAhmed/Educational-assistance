import { MdLibraryAdd, MdManageHistory } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import SidebarLinks from "../../dashbord/SideBarLinks/SidebarLinks";
import { RxAvatar } from "react-icons/rx";


const AdminMenubar = () => {
    
    return (
        <div>
             <SidebarLinks label={'Add Scholarship'} address={'/dashboard/addScholarship'} icon={MdLibraryAdd}></SidebarLinks>
             
             <SidebarLinks label={'Manage Scholarship'} address={'/dashboard/manageScholarship'} icon={MdManageHistory}></SidebarLinks>


             <SidebarLinks label={'Add Scholarship'} address={'/dashboard/addScholarship'} icon={MdLibraryAdd}></SidebarLinks>

             <SidebarLinks label={'Moderator Profile'} address={'/dashboard/moderatorProfile'} icon={RxAvatar}></SidebarLinks>
        </div>
    );
};

export default AdminMenubar;