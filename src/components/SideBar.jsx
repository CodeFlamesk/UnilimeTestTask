import { NavLink } from "react-router-dom";

const SideBar = () => {
    const navText = ({ isActive }) =>
        ` text-menu  ${isActive ? 'text-instagram' : 'nav-link'}`;

    return (
        <aside className="min-w-36 max-w-full max-h-max p-5 mt-2 tb:mt-8 border-dark   rounded-md shadow-md bg-white border-2  hover:border-orange-btn bg-opacity-25 hover:bg-opacity-100 transition-colors duration-300 ease-in-out">
            <nav className="flex flex-row tb:flex-col gap-4 justify-center">
                <NavLink to="/overview" className={navText}>
                    Overview
                </NavLink>
                <NavLink to="/users" className={navText}>
                    Users
                </NavLink>
                <NavLink to="/settings" className={navText}>
                    Settings
                </NavLink>
            </nav>
        </aside>
    );
};

export default SideBar;
