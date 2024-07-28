import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies = [] }) => {
    const location = useLocation();

    return (
        <div>
            <ul>{movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                        <h3>{movie.original_title}</h3>
                    </Link>
                </li>
            )) }</ul>
        </div>
    )
};

export default MovieList;