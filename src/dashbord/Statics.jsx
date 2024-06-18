import { bg } from "date-fns/locale";
import useAuth from "../Hooks/useAuth";

const Statics = () => {
    const {user}=useAuth()
    return (
        <div className='bg-base-200 h-full p-16 rounded-xl '>
            <h2 className="text-xl font-bold ">Hi,<span className="text-4xl font-bold text-green-600"> {user?.displayName}</span> welcome To your Dashboard..... <br />Check Your activities step by step</h2>
        </div>
    );
};

export default Statics;