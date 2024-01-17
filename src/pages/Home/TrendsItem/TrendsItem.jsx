import { Link } from 'react-router-dom';

import helpers from 'helpers/helpers';
import defaultImage from '../../../img/no-image.jpg';
import Styled from './TrendsItem.styled';

const { Item, Image, Title, ShortDescr } = Styled;

const TrendsItem = ({ trend }) => {
    const { id, title, name, poster_path, release_date, first_air_date, media_type } =
        trend;
    return (
        <Item>
            <Link to={`/movies/${id}`}>
                {poster_path ? (
                    <Image
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt={title || name}
                    />
                ) : (
                    <Image src={defaultImage} alt={title || name} loading="lazy" />
                )}
                <Title>{title || name}</Title>
                {
                    <ShortDescr>{`${helpers.getFullYear(
                        release_date || first_air_date
                    )}, ${media_type}`}</ShortDescr>
                }
            </Link>
        </Item>
    );
};

export default TrendsItem;
