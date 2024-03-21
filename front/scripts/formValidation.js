const form = document.getElementById("addMovieForm");

form.addEventListener("submit", async function(e){
    e.preventDefault();

    var inputs = form.getElementsByTagName("input");
    
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type !== "submit" && inputs[i].type !== "button") {
        if (inputs[i].value.trim() === '') {
          alert("Please, complete all the fields");
          return false;
        }
      }
    }

    const genre = document.getElementById("movieGenre").value.trim();
    const genreArray = genre.split(",");

    const formData = {
        title: document.getElementById('movieTitle').value.trim(),
        year: document.getElementById('movieYear').value.trim(),
        director: document.getElementById('movieDirector').value.trim(),
        duration: document.getElementById('movieDuration').value.trim(),
        genre: genreArray,
        rate: document.getElementById('movieRate').value.trim(),
        poster: document.getElementById('moviePoster').value.trim()
     };

    console.log([formData]);

    await axios.post("http://localhost:3000/movies", formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    
})









// document.getElementById("addMovieForm").addEventListener('submit', function (event) {
//     event.preventDefault();

//     var formulario = document.getElementById("addMovieForm");
//     var inputs = formulario.getElementsByTagName("input");
    
//     for (var i = 0; i < inputs.length; i++) {
//       if (inputs[i].type !== "submit" && inputs[i].type !== "button") {
//         if (inputs[i].value.trim() === '') {
//           alert("Please, complete all the fields");
//           return false;
//         }
//       }
//     }

//     const genre = document.getElementById("movieGenre").value.trim();
//     const genreArray = genre.split(",");

//     const formData = new FormData(formulario);
//     console.log(formData);

    // const formData = {
    //     title: document.getElementById('movieTitle').value.trim(),
    //     year: document.getElementById('movieYear').value.trim(),
    //     director: document.getElementById('movieDirector').value.trim(),
    //     duration: document.getElementById('movieDuration').value.trim(),
    //     genre: genreArray,
    //     rate: document.getElementById('movieRate').value.trim(),
    //     poster: document.getElementById('moviePoster').value.trim()
    //  };

//     axios.post("http://localhost:3000/movies", formData)
//         .then(response => {
//              console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// });


  function clearFields() {
    var inputs = document.querySelectorAll("#addMovieForm input");
    inputs.forEach(function(input) {
      input.value = "";
    });
  }

