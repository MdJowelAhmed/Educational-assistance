import { MdLibraryAdd, MdManageHistory, MdReviews, MdSettingsApplications } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useRole from "../../Hooks/useRole";
import SidebarLinks from "../../dashbord/SideBarLinks/SidebarLinks";
import { RxAvatar } from "react-icons/rx";
import { FaStreetView } from "react-icons/fa";


const ModeratorMenuBar = () => {
    // const {user}=useAuth()
    // const [role]=useRole()
    // const axiosSecure=useAxiosSecure()
    return (
        <div>
             <SidebarLinks label={'Moderator Profile'} address={'/dashboard/moderatorProfile'} icon={RxAvatar}></SidebarLinks>

             <SidebarLinks label={'Applied Application'} address={'/dashboard/allApplied'} icon={MdSettingsApplications}></SidebarLinks>
             
             <SidebarLinks label={'Manage Scholarship'} address={'/dashboard/manageScholarship'} icon={MdManageHistory}></SidebarLinks>

             <SidebarLinks label={'Add Scholarship'} address={'/dashboard/addScholarship'} icon={MdLibraryAdd}></SidebarLinks>

             <SidebarLinks label={'All Review'} address={'/dashboard/allReview'} icon={MdReviews}></SidebarLinks>

            

        </div>
    );
};

export default ModeratorMenuBar;