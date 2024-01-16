import { normalizedArr } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import API from 'services/movie-api';
import defaultImage from '../../img/no-image.jpg';

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const movieById = async () => {
            const data = await API.fetchMovieById(movieId);
            setMovie({ ...data });
        };
        movieById();
    }, [movieId]);

    const getFullYear = dateString => {
        const date = new Date(dateString);

        return date.getFullYear();
    };

    return (
        <main>
            <div className="main">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                    />
                ) : (
                    <img src={defaultImage} alt={movie.original_title} width={500} />
                )}
                <div className="info">
                    <h2>
                        {movie.original_title}{' '}
                        {movie.release_date && `(${getFullYear(movie.release_date)})`}
                    </h2>
                    {movie.tagline && (
                        <p>
                            <b>Slogan: </b>
                            {movie.tagline}
                        </p>
                    )}
                    {movie.production_countries && (
                        <p>
                            <b>Country: </b>
                            {normalizedArr(movie.production_countries)}
                        </p>
                    )}
                    {movie.genres && (
                        <p>
                            <b>Genres: </b>
                            {normalizedArr(movie.genres)}
                        </p>
                    )}
                    {movie.overview && (
                        <p>
                            <b>Overview: </b>
                            {movie.overview}
                        </p>
                    )}
                </div>
            </div>

            <div className="detail">
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </main>
    );
};

export default MovieDetails;
