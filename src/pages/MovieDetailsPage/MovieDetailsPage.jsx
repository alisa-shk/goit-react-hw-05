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
        <div className={s.page}>
            <div className={s.movieBox}>
                <div>
                    <Link to={backLinkRef.current}>Go back</Link>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} />
                </div>
                <div>
                    <h2 className={s.name}>{movie.original_title}</h2>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <div className={s.addBox}>
                <p className={s.add}>Additional information</p>
                <nav className={s.list}>
                    <NavLink to="cast">Cast</NavLink>
                    <NavLink to="reviews">Reviews</NavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    )

}

export default MovieDetailsPage;