//console.log(tempData);
//console.log("estoy en el index");
const filmsContainer = document.getElementById("movies")


export	function renderMovies(movie) {
  const movieCard = document.createElement("div")
  movieCard.classList.add("card")

  const descriptions = document.createElement("div")
  descriptions.classList.add("descriptions")
  descriptions.style.cursor = "pointer";
  descriptions.addEventListener("click", function(){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  });

  movieCard.innerHTML = `<img src="${movie.poster}"/>`
  descriptions.innerHTML = `<h2>${movie.title}</h2>
  <h4>Premiere: ${movie.year}</h4> 
  <h4>Director: ${movie.director}</h4>
  <p>Duration: ${movie.duration}</p>
  <p><strong>${movie.genre.join(', ')}</strong></p>
  <p><strong>Rate: </strong>${movie.rate}</p>
  `

  filmsContainer.appendChild(movieCard);
  movieCard.appendChild(descriptions);


}


// export function renderMovies(movie) {
//     const movieCard = document.createElement("div")
//     movieCard.classList.add("movie_card")
//     movieCard.id = movie.id;

//      const infoSection = document.createElement("div")
//      infoSection.classList.add("info_section")
//      infoSection.style.cursor = "pointer";
//      infoSection.addEventListener("click", function() {
//         window.location.href = "https://www.youtube.com"; 
//     });    

//        const divImagen = document.createElement("div")
//        divImagen.classList.add("movie_header")

//        const divTextos = document.createElement("div")
//        divTextos.classList.add("movie_desc")

//        const movieSocial = document.createElement("div")
//        movieSocial.classList.add("movie_social")

//      const blurBack = document.createElement("div")
//      blurBack.classList.add("blur_back", `${movie.id}_back`)
     

//     divImagen.innerHTML = `<img class="locandina" src="${movie.poster}"/>
//     <h1>${movie.title}</h1>
//     <h4>${movie.year}, ${movie.director}</h4>
//     <span class="minutes">${movie.duration}</span>
//     <p class="type">${movie.genre.join(', ')}
//     `

//     divTextos.innerHTML = `<p class="text">${movie.description}</p>
//     `

//     movieSocial.innerHTML = `<ul>
//     <li><i class="material-icons"><strong>Rate: </strong>${movie.rate}</i></li>
//     </ul>
//     `

//   filmsContainer.appendChild(movieCard);
//   movieCard.appendChild(infoSection);
//   movieCard.appendChild(blurBack);
//   infoSection.appendChild(divImagen);
//   infoSection.appendChild(divTextos);
//   infoSection.appendChild(movieSocial);
// }




//tempData.forEach(renderMovies)