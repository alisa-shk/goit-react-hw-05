import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/movies-api";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    
    useEffect(() => {
        if (query) {
            const fetchMovies = async () => {
                try {
                    const data = await searchMovies(query);
                    setMovies(data);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchMovies();
        }
    }, [query])
    
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchQuery = form.elements.query.value;
        setSearchParams({ query: searchQuery });
    };

    return (
        <div className={s.page}>
            <h1>Movies</h1>
            <form onSubmit={handleSearch} className={s.form}>
                <input type="text" name="query" className={s.input} />
                <button type="submit" className={s.btn}>Search</button>
            </form>
            <MovieList movies={movies} />
        </div>
    )
};

export default MoviesPage;