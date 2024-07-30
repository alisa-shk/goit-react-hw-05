import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies = [] }) => {
    const location = useLocation();

    return (
        <div>
            <ul className={s.list}>
                {movies.map(movie => (
                <li key={movie.id}>
                        <NavLink
                            to={`/movies/${movie.id}`}
                            state={location}
                        >
                            {movie.title}
                        </NavLink>
                </li>
            )) }</ul>
        </div>
    )
};

export default MovieList;