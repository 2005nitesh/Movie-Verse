import {useState, useEffect, useContext , createContext} from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    },[])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },[favorites])

    const addFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    const removeFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const values = {
        favorites,
        addFavorites,
        removeFavorites,
        isFavorite
    }


    return <MovieContext.Provider value = {values}>
        {children}
    </MovieContext.Provider>
}