import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/movies-api";


const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [movieId]);

    if (reviews.length === 0) {
        return <h2>No one has left a review yet.</h2>
    }

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((item) => (
                    <li key={item.id}>
                        <h3>Author: {item.author}</h3>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MovieReviews;