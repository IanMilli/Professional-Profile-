//use this section to define global variables required for javaScript functions
let soloProjectsEl = document.getElementById("soloProjects");
let passwordGeneratorsEl = document.getElementById("passwordGenerators");
let revisionCardsTestEl = document.getElementById("revisionCardsTest");
let dailyPlannerEl = document.getElementById("dailyPlanner");
let weatherDashboardEl = document.getElementById("weather");
let readMeEl = document.getElementById("readMeGenerator");
let voluntaryEl = document.getElementById("voluntaryProjects");
let collaboratedEl = document.getElementById("collaboratedProjects");
let closeSoloProjectsEl = document.getElementById("closeSolo");
//code to close first menu card and open solo projects card
soloProjectsEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("firstMenuCard").classList.add("d-none");
  document.getElementById("row3Star").classList.remove("d-none");
  document.getElementById("soloProjectsCard").classList.remove("d-none");
});
//code to close the solo projects card and return to the first menu card
closeSoloProjectsEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("row3Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
})


passwordGeneratorsEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("passwordGeneratorsCard").classList.remove("d-none")
});

revisionCardsTestEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("revisionTestCard").classList.remove("d-none")
});

dailyPlannerEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("dailyPlannerCard").classList.remove("d-none")
});

weatherDashboardEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("weatherCard").classList.remove("d-none")
});

readMeEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("readMeCard").classList.remove("d-none")
});

voluntaryEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("firstMenuCard").classList.add("d-none");
  document.getElementById("row4Star").classList.remove("d-none");
  document.getElementById("voluntaryCard").classList.remove("d-none");
})

collaboratedEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("firstMenuCard").classList.add("d-none");
  document.getElementById("collaboratedStar").classList.remove("d-none");
  document.getElementById("collaboratedCard").classList.remove("d-none");
})