import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/movie-api';
import defaultImage from '../../img/no-image.jpg';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const movieCast = async () => {
            try {
                const data = await API.fetchMovieCast(movieId);
                setCast([...data]);
            } catch (error) {
                console.log(error);
            }
        };

        movieCast();
    }, [movieId]);

    return (
        <ul>
            {cast.map(({ credit_id, profile_path, name, character }) => (
                <li key={credit_id}>
                    {profile_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                            alt={name}
                        />
                    ) : (
                        <img src={defaultImage} alt={name} />
                    )}

                    <p>{name}</p>
                    <p>{character}</p>
                </li>
            ))}
        </ul>
    );
};

export default Cast;
