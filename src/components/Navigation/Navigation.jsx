import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";


const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
    return (
        <>
            <nav>
                <ul className={s.header}>
                    <li><NavLink to="/" className={buildLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/movies" className={buildLinkClass}>Movies</NavLink></li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;