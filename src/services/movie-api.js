import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQxZjA4MDA4NmRkZjBkNThjNGJkYzA3ZWY0YTAzNiIsInN1YiI6IjY1YTYzZjQxOWJjZDBmMDEyM2JhNzNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9KEtiGYN_3JrU51Sf_c_is4ZEHWjNunRsBdl0i-lHic',
    },
});

const API = {
    fetchTrendingMovies: async () => {
        const {
            data: { results },
        } = await instance.get('/trending/movie/day');
        return results;
    },

    fetchMovieById: async movieId => {
        const { data } = await instance.get(`/movie/${movieId}`);
        return data;
    },

    fetchMovieCast: async movieId => {
        const {
            data: { cast },
        } = await instance.get(`/movie/${movieId}/credits`);
        return cast;
    },

    fetchMovieReviews: async movieId => {
        const {
            data: { results },
        } = await instance.get(`/movie/${movieId}/reviews`);
        return results;
    },

    fetchMovieByQuery: async query => {
        const {
            data: { results },
        } = await instance.get(`/search/movie?query=${query}`);
        return results;
    },
};

export default API;
