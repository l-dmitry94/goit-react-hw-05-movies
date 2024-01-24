import { Link } from 'react-router-dom';

import helpers from 'helpers/helpers';
import defaultImage from '../../../img/no-image.jpg';
import Styled from './MoviesItem.styled';
import { useState } from 'react';

const { Item, Image, Title, ShortDescr } = Styled;

const MoviesItem = ({ movie }) => {
    console.log(movie)
    const { id, title, name, poster_path, release_date, first_air_date } =
    movie;

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Item>
            <Link to={`/movies/${id}`}>
                {poster_path ? (
                    <Image
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt={title || name}
                        onLoad={() => setIsImageLoaded(true)}
                    />
                ) : (
                    <Image src={defaultImage} alt={title || name} loading="lazy" />
                )}
                {poster_path && isImageLoaded && (
                    <>
                        <Title>{title || name}</Title>
                        {
                            <ShortDescr>{`${helpers.getFullYear(
                                release_date || first_air_date
                            )}`}</ShortDescr>
                        }
                    </>
                )}
            </Link>
        </Item>
    );
};

export default MoviesItem;
