import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import { searchMovies } from "../services/movies-api";
import { useSearchParams } from "react-router-dom";

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
        <>
            <h1>Movies</h1>
            <form onSubmit={handleSearch}>
                <input type="text" name="query" />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </>
    )
};

export default MoviesPage;