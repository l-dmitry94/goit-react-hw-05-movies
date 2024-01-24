import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import API from 'services/movie-api';
import defaultImage from '../../img/no-image.jpg';
import helpers from 'helpers/helpers';
import Styled from './MovieDetails.styled';

const {
    MainInfo,
    WrapperImage,
    Info,
    Title,
    BoldTitle,
    DetailTitle,
    DetailList,
    DetailLink,
} = Styled;

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const movieById = async () => {
            const data = await API.fetchMovieById(movieId);
            setMovie(data);
        };
        movieById();
    }, [movieId]);

    return (
        <main>
            {movie && (
                <MainInfo>
                    {movie.poster_path ? (
                        <WrapperImage>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.original_title}
                            />
                        </WrapperImage>
                    ) : (
                        <WrapperImage>
                            <img
                                src={defaultImage}
                                alt={movie.original_title}
                                width={500}
                            />
                        </WrapperImage>
                    )}
                    <Info>
                        <Title>
                            {movie.original_title}{' '}
                            {movie.release_date &&
                                `(${helpers.getFullYear(movie.release_date)})`}
                        </Title>
                        {movie.tagline && (
                            <p>
                                <BoldTitle>Slogan: </BoldTitle>
                                {movie.tagline}
                            </p>
                        )}
                        {movie.production_countries && (
                            <p>
                                <BoldTitle>Country: </BoldTitle>
                                {helpers.normalizedArr(movie.production_countries)}
                            </p>
                        )}
                        {movie.genres && (
                            <p>
                                <BoldTitle>Genres: </BoldTitle>
                                {helpers.normalizedArr(movie.genres)}
                            </p>
                        )}
                        {movie.overview && (
                            <p>
                                <BoldTitle>Overview: </BoldTitle>
                                {movie.overview}
                            </p>
                        )}
                        <div className="detail">
                            <DetailTitle>Additional information</DetailTitle>
                            <DetailList>
                                <li>
                                    <DetailLink to="cast">Cast</DetailLink>
                                </li>
                                <li>
                                    <DetailLink to="reviews">Reviews</DetailLink>
                                </li>
                            </DetailList>
                            <Outlet />
                        </div>
                    </Info>
                </MainInfo>
            )}
        </main>
    );
};

export default MovieDetails;
