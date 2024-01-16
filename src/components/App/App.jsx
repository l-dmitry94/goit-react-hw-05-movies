import MovieDetails from 'pages/MovieDetails';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cast from 'components/Cast';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/movies" element={<div>Movies</div>} />
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<div>Reviews</div>} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
