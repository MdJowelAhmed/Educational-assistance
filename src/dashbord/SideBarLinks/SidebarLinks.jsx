import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const SidebarLinks = ({ label, address, icon: Icon }) => {
    return (
        <div>
            <NavLink
                to={address}
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <Icon className='w-5 h-5' />

                <span className='mx-4 font-medium'>{label}</span>
            </NavLink>
        </div>
    );
};

SidebarLinks.propTypes = {
    label: PropTypes.string,
    address: PropTypes.string,
    icon: PropTypes.elementType,
  }

export default SidebarLinks;