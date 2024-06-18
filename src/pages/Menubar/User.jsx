import { RxAvatar } from "react-icons/rx";
import SidebarLinks from "../../dashbord/SideBarLinks/SidebarLinks";
import { MdReviews, MdSettingsApplications } from "react-icons/md";


const User = () => {
    return (
        <div>
             <SidebarLinks label={'My Profile'} address={'/dashboard/moderatorProfile'} icon={RxAvatar}></SidebarLinks>

             <SidebarLinks label={'My Application'} address={'/dashboard/myApplication'} icon={MdSettingsApplications}></SidebarLinks>
             
             <SidebarLinks label={'My Review'} address={'/dashboard/myReview'} icon={MdReviews}></SidebarLinks>

        </div>
    );
};

export default User;