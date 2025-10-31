import "../css/MovieCard.css";
import { useMovieContext } from "../Contexts/MovieContext";

function MovieCard({movie}) {
    const {isFavorite, addFavorites, removeFavorites} = useMovieContext();
    const Favorite = isFavorite(movie.id);

    function handleFovoriteClick (e){
        e.preventDefault();
        if (Favorite) removeFavorites(movie.id)
        else addFavorites(movie);
    }

    return (
        <div className = "movie-card">
            <div className = "movie-poster"> 
                <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt = {movie.title} />
                <div className = "movie-overlay">
                    <button className = {`favorite-btn ${Favorite ? "active" : ""}`} onClick={handleFovoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className = "movie-info">
                <h3 className = "movie-title">{movie.title}</h3>
                <p>{movie.release_date.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard;