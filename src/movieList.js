import { useContext, useState } from "react"
import { MovieContext } from "./movieProvider";


const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    const addmovieHandler = (movie) => {
        setMovies([...setMovies, movie]);
    }
    return (
        <div>
            {movies.map(item => (
                <Movie key={item.keyValue} {...item} />
            ))}
        </div>
    )
}

export const Movie = (props) => {
    const {name, age} = props;
    console.log('movie: ', props)
    return (
        <div>
            <p >Name: {name}</p>
            <p >Age: {age}</p>
        </div>
    )
}

export default MovieList;