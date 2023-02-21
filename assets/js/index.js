//use this section to define global variables required for javaScript functions
let soloProjectsEl = document.getElementById("soloProjects");
let passwordGeneratorsEl = document.getElementById("passwordGenerators");
let revisionCardsTestEl = document.getElementById("revisionCardsTest");
let dailyPlannerEl = document.getElementById("dailyPlanner");
let weatherDashboardEl = document.getElementById("weather"); 

soloProjectsEl.addEventListener("click", function (event) {
event.preventDefault();
document.getElementById("firstMenuCard").classList.add("d-none");
document.getElementById("soloProjectsCard").classList.remove("d-none");

});


passwordGeneratorsEl.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("row2Star").classList.add("d-none");
    document.getElementById("soloProjectsCard").classList.add("d-none");
    document.getElementById("passwordGeneratorsCard").classList.remove("d-none")
  });

revisionCardsTestEl.addEventListener("click", function (event){
event.preventDefault();
document.getElementById("row2Star").classList.add("d-none");
    document.getElementById("soloProjectsCard").classList.add("d-none");
    document.getElementById("revisionTestCard").classList.remove("d-none")
});

dailyPlannerEl.addEventListener("click", function (event){
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
      document.getElementById("soloProjectsCard").classList.add("d-none");
      document.getElementById("dailyPlannerCard").classList.remove("d-none")
  });

  weatherDashboardEl.addEventListener("click", function (event){
    event.preventDefault();
    document.getElementById("row2Star").classList.add("d-none");
        document.getElementById("soloProjectsCard").classList.add("d-none");
        document.getElementById("weatherCard").classList.remove("d-none")
    });