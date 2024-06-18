import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import LoadingSpinner from "../../../pages/Spinner/Spinner";


const ModeratorProfile = () => {
    const {user,loading}=useAuth()
    const [role, isLoading] = useRole()
    if (isLoading || loading) return <LoadingSpinner />
    return (
        <div className="flex flex-col justify-center items-center h-96 bg-base-200">
           <img className="w-32 h-32 rounded-full" src={user?.photoURL} alt="" />
           <h2 className="my-7 text-4xl font-lato">{user?.displayName}</h2>
           <h2 className="my-7 text-2xl font-lato">{user?.email}</h2>
        </div>
    );
};

export default ModeratorProfile;