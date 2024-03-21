const movieService = require("../services/movieService")

module.exports = {
    getAllMovies: async(req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error: "No estan las peliculas"
            })
        }
    },

    addMovie: async(req, res) =>{
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body;
            const newMovie = await movieService.addMovies({title, year, director, duration, genre, rate, poster});
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({
                error: "Error de controlador"
            })
        }
    }
}