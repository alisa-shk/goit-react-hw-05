import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../services/movies-api";


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
        <div>
            <h2>Trending today</h2>
            <MovieList movies={movies} />
        </div>
    )
};

export default HomePage;