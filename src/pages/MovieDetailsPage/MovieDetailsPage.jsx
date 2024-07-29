import { useState, useEffect, useRef } from "react";
import { useParams, Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/movies-api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from || "/movies");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [movieId]);

    if (!movie) return <span>Loading...</span>;

    return (
        <div>
            <Link to={backLinkRef.current}>Go back</Link>
            <h1>{movie.original_title}</h1>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} />
                <p>{movie.overview}</p>
            </div>
            <nav className={s.details}>
                <NavLink to="cast">Cast</NavLink>
                <NavLink to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )

}

export default MovieDetailsPage;