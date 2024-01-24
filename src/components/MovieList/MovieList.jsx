import Styled from "./MovieList.styled";
import MoviesItem from "./MoviesItem";

const {List} = Styled

const MovieList = ({movies}) => {
    const moviesItems = movies.map(movie => (
        <MoviesItem key={movie.id} movie={movie}/>
    ));

    return (
        <List>{moviesItems}</List>
    )
}

export default MovieList