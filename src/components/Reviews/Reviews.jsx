import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/movie-api';
import Styled from './Reviews.styled';

const { ReviewsList, ReviewAuthor } = Styled;

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
        <>
            {reviews?.length ? (
                <ReviewsList>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <ReviewAuthor>
                                <b>Author: </b>
                                {author}
                            </ReviewAuthor>
                            <p>{content}</p>
                        </li>
                    ))}
                </ReviewsList>
            ) : (
                <p>We don't have any reviews for this movie</p>
            )}
        </>
    );
};

export default Reviews;
