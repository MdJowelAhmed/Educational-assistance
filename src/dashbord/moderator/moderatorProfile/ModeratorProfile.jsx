import useAuth from "../../../Hooks/useAuth";


const ModeratorProfile = () => {
    const {user}=useAuth()
    return (
        <div className="flex flex-col justify-center items-center h-96">
           <img className="w-32 h-32 rounded-full" src={user?.photoURL} alt="" />
           <h2 className="my-7 text-4xl font-lato">{user?.displayName}</h2>
        </div>
    );
};

export default ModeratorProfile;