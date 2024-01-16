import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from 'services/movie-api';

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

    return (
        <main>
            <h1>Trendings today</h1>
            <ul>
                {trends.map(({ id, title, name }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title || name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Home;
