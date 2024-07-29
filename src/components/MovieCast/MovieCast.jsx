import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/movies-api";

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieCast(movieId);
                setCast(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [movieId])

    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3> as <span>{item.character}</span></li>
                ))}
            </ul>
        </div>
    )

};



export default MovieCast;