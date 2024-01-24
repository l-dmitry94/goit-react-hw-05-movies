import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from 'services/movie-api';
import MovieList from 'components/MovieList';


const Movies = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieQuery = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!movieQuery) {
            return;
        }
        const movieByQuery = async () => {
            try {
                const data = await API.fetchMovieByQuery(movieQuery);
                setFilteredMovies([...data]);
            } catch (error) {
                console.log(error);
            }
        };

        movieByQuery();
    }, [movieQuery]);

    const handleChange = ({ target }) => {
        setSearchValue(target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        setSearchParams({ query: searchValue });
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    value={searchValue}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={filteredMovies}/>
        </main>
    );
};

export default Movies;
