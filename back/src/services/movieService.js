const Movie = require("../models/Movie");
const axios = require("axios");

module.exports = {
    getMovies: async()=>{
        const movies = await Movie.find();
        return movies;
    }
}