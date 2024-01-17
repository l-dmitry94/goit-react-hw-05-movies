import { useEffect, useState } from 'react';

import API from 'services/movie-api';
import TrendsItem from './TrendsItem';
import Styled from './Home.styled';

const { Title, List } = Styled;

const Home = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        const trendingMovies = async () => {
            try {
                const data = await API.fetchTrendingMovies();
                setTrends([...data]);
            } catch (error) {
                console.log(error);
            }
        };

        trendingMovies();
    }, []);

    const trendsItems = trends.map(trend => (
        <TrendsItem key={trend.id} trend={trend} />
    ));

    return (
        <main>
            <Title>Trendings today</Title>
            <List>{trendsItems}</List>
        </main>
    );
};

export default Home;
