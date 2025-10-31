import "../css/FavoritePage.css";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }
    return (<div className="favorites-empty">
        <h2>NO Favorite Movies Yet.</h2>
        <p>Start adding movies to your favorite list!!!</p>
    </div>
    )
}

export default Favorites;