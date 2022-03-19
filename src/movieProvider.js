import React, { createContext, useState } from "react"


export const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [movieState, setMovieState] = useState([
        {name: 'Nguyen Van Tung', age: 40, keyValue: '1'},
        {name: 'Nguyen Minh Nhat', age: 11, keyValue: '2'},
        {name: 'Nguyen Quynh chi', age: 14, keyValue: '3'},
    ]);

    return (
        <MovieContext.Provider value={[movieState, setMovieState]}>
            {children}
        </MovieContext.Provider>

    );
}

export default MovieProvider;