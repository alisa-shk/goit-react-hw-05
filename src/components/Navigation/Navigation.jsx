import { NavLink } from "react-router-dom";

// import clsx from "clsx";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;