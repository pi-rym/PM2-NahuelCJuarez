function formValidation() {
    var formulario = document.getElementById("addMovieForm");
    var inputs = formulario.getElementsByTagName("input");
    
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type !== "submit" && inputs[i].type !== "button") {
        if (inputs[i].value.trim() === '') {
          alert("Please, complete all the fields");
          return false;
        }
      }
    }
    
    return true;
  }


  function clearFields() {
    var inputs = document.querySelectorAll("#addMovieForm input");
    inputs.forEach(function(input) {
      input.value = "";
    });
  }