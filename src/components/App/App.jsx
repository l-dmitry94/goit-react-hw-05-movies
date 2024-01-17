import { Route, Routes } from 'react-router-dom';

import MovieDetails from 'pages/MovieDetails';
import SharedLayout from 'components/SharedLayout';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import Home from 'pages/Home';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/movies" element={<div>Movies</div>} />
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
