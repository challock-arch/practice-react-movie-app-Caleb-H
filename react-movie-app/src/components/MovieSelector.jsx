import { useState } from "react";

//test data
let movies = [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "Inception", genre: "Science Fiction" },
    { title: "The Matrix", genre: "Science Fiction" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Interstellar", genre: "Science Fiction" },
    { title: "Parasite", genre: "Thriller" }
];

const MovieSelector = () => {
    const [selectionGenre, setGenre] = useState('');
    const [filteredMovies, setFiltered] = useState([]);

    const handleFilter = () => {
        let filtered = movies.filter(movie => movie.genre === selectionGenre);
        console.log(filtered);
        setFiltered(filtered);
    }

    return (
        <div>
            <div>
                <select value={selectionGenre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">--Select a Genre--</option>
                    <option value="Drama">Drama</option>
                    <option value="Crime">Crime</option>
                    <option value="Action">Action</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Thriller">Thriller</option>
                </select>
                <button onClick={handleFilter}>Filter Movies</button>
            </div>
            <div>
                {filteredMovies.map((movie,index) => (
                    <div className="movie-card" key={index}>
                        <h2>{movie.title}</h2>
                        <h3>{movie.genre}</h3>
                    </div>
                ))};
            </div>
        </div>
    )
}

export default MovieSelector;