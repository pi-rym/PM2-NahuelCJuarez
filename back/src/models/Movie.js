const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    description: String,
    poster: String,
    backgroundImg: String,
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;