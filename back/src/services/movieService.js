const axios = require("axios");

module.exports = {
    getMovies: async()=>{
        const response = await axios.get("https://students-api.up.railway.app/movies");
        const movieData = response.data;
        return movieData;  
    }
}