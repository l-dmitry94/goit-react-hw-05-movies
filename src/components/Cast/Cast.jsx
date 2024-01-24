import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/movie-api';
import defaultImage from '../../img/no-image.jpg';
import Styled from './Cast.styled';

const {CastList, CastItem, CastImage, CastName, CastCharacter} = Styled

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
        <CastList>
            {cast.map(({ credit_id, profile_path, name, character }) => (
                <CastItem key={credit_id}>
                    {profile_path ? (
                        <CastImage
                            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                            alt={name}
                        />
                    ) : (
                        <CastImage src={defaultImage} alt={name} />
                    )}

                    <CastName>{name}</CastName>
                    <CastCharacter>{character}</CastCharacter>
                </CastItem>
            ))}
        </CastList>
    );
};

export default Cast;
