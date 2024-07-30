import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/movies-api";
import s from "./HomePage.module.css";


const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTrendingMovies();
                setMovies(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={s.home}>
            <h2 className={s.trend}>Trending today</h2>
            <MovieList movies={movies} className={s.movies} />
        </div>
    )
};

export default HomePage;