import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/movie-api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const movieCast = async () => {
            try {
                const data = await API.fetchMovieReviews(movieId);
                setReviews([...data]);
            } catch (error) {
                console.log(error);
            }
        };

        movieCast();
    }, [movieId]);

    return (
        <ul>
            {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <span>
                        <b>Author: </b>
                        {author}
                    </span>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    );
};

export default Reviews;
