import { useEffect, useState } from 'react';

import API from 'services/movie-api';
import TrendsItem from '../../components/MovieList/MoviesItem';
import Styled from './Home.styled';
import MovieList from 'components/MovieList';

const { Title, List } = Styled;

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const trendingMovies = async () => {
            try {
                const data = await API.fetchTrendingMovies();
                setMovies([...data]);
            } catch (error) {
                console.log(error);
            }
        };

        trendingMovies();
    }, []);

    return (
        <main>
            <Title>Trendings today</Title>
            <MovieList movies={movies}/>
        </main>
    );
};

export default Home;
