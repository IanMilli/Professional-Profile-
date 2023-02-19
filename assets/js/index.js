let passwordGeneratorsEl = document.getElementById("passwordGenerators");

passwordGeneratorsEl.addEventListener("click", function (event) {
    //area.innerHTML = "";
    event.preventDefault();
    document.getElementById("passwordGeneratorsCard").classList.remove("d-none")
  });