import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/Movie.css";

function MoviePage() {
    const location = useLocation();
    const movie = location.state?.movie;

    if (!movie) {
        return <p>Movie not found</p>;
    }

    const BASE_URL = "https://vidsrc.xyz/embed/movie";
    const movie_url = `${BASE_URL}?tmdb=${movie.id}`;

    return (
        <div className="movie-window">
            {movie_url ? (
                <iframe className="movie-window" src={movie_url} allowFullScreen></iframe>
            ) : (
                <p>Loading movie or unable to fetch movie details...</p>
            )}
            <p>{movie.title}</p>
            <a href={movie_url} target="_blank">if the player doesn't work click here</a>
        </div>
    );
}

export default MoviePage;