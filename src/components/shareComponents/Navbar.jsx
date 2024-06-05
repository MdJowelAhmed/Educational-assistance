import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { RxAvatar } from "react-icons/rx";


const Navbar = () => {
    const { user, logOut } = useAuth()
    const navLinks = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? "btn  bg-gradient-to-r from-cyan-500 to-blue-500 " : "btn mx-3"}>Home</NavLink></li>
        <li><NavLink to='/allScholarship' className={({ isActive }) => isActive ? "btn  bg-gradient-to-r from-cyan-500 to-blue-500" : "btn  mx-3"}>All Scholarship</NavLink></li>
    </>

const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                            {
                                user && <Link to='/dashboard'>Dashboard</Link>
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Educational <span className="text-blue-600">Assistance</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                        {
                            user && <Link to='/dashboard' className="btn">Dashboard</Link>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <img className="w-16 h-16 rounded-full" src={user.photoURL} alt="" /> : <RxAvatar className="w-16 h-16 rounded-full" />
                    }

                    <div>
                        {
                            user ? <button onClick={handleLogOut} className="btn">Logout</button> : <div className="flex gap-3">
                                <Link to='/login'>Login</Link>
                                <p>/</p>
                                <Link to='/register'>Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;