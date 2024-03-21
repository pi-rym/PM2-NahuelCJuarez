import { renderMovies } from "./renderCards";

// $.get("https://students-api.2.us-1.fl0.io/movies", (data) => {  
// data.forEach(renderMovies)
// });
const axios = require("axios");
async function fetchMovies() {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        const movies = response.data;
        console.log(movies);
        movies.forEach(movie => {
            renderMovies(movie);
        });
    } catch (error) {
        console.log(error.message);
    }
}
fetchMovies();

const form = document.getElementById("addMovieForm");

form.addEventListener("submit", async function(e){
    e.preventDefault();

    const formData = new FormData(form);

    console.log([...formData]);

    try {
        await axios.post("https://httpbin.org/post", formData)
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
})



//   const response = await axios.get("https://students-api.up.railway.app/movies");