//JS file to allow buttons to dynamically alter html and css to reveal and close different divs

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
let closeCollaboratedProjectsEl = document.getElementById("closeCollaborated");
let closeVoluntaryProjectsEl = document.getElementById("closeVoluntary");
let closePasswordGeneratorCardEl = document.getElementById("passwordGeneratorHomeButton")
let goBackOnePasswordsEl = document.getElementById("goBackPasswords");
let closeRevisionTestCardEl = document.getElementById("passwordRevisionHomeButton");
let goBackOneRevisionTestEl = document.getElementById("goBackRevision");
let closePlannerCardEl = document.getElementById("plannerHomeButton");
let goBackPlannerEl = document.getElementById("goBackPlanner");
let closeWeatherCardEl = document.getElementById("weatherHomeButton");
let goBackWeatherEl = document.getElementById("goBackWeather");
let closeReadMeCardEl = document.getElementById("readMeHomeButton");
let goBackReadMeEl = document.getElementById("goBackReadMe");

//code to close first menu card and open solo projects card
soloProjectsEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("firstMenuCard").classList.add("d-none");
  document.getElementById("row3Star").classList.remove("d-none");
  document.getElementById("soloProjectsCard").classList.remove("d-none");
  window.scrollTo(0, document.getElementById('soloProjectsCard').offsetTop)
});
//code to close the solo projects card and return to the first menu card
closeSoloProjectsEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("row3Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('work').offsetTop)
})

//code to close solo projects card and open password generators card
passwordGeneratorsEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row3Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("passwordGeneratorsCard").classList.remove("d-none")
});
//code to close password generators card and return to first menu card

closePasswordGeneratorCardEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("passwordGeneratorsCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('work').offsetTop)
})

//code to close password generators card and return to solo projects card
goBackOnePasswordsEl.addEventListener("click", function (event){
  document.getElementById("soloProjectsCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("row3Star").classList.remove("d-none");
  document.getElementById("passwordGeneratorsCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('soloProjectsCard').offsetTop)
})
// code to open revision test card and close solo projects card
revisionCardsTestEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row3Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("revisionTestCard").classList.remove("d-none");
  });
//code to close password revision test card and return to first menu card

closeRevisionTestCardEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("revisionTestCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('work').offsetTop)
})

//code to close revision test card and return to solo projects card
goBackOneRevisionTestEl.addEventListener("click", function (event){
  document.getElementById("soloProjectsCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("row3Star").classList.remove("d-none");
  document.getElementById("revisionTestCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('soloProjectsCard').offsetTop)
})

//code to open daily planner card and shut solo projects card 
dailyPlannerEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row3Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("dailyPlannerCard").classList.remove("d-none")
});

//code to close password revision test card and return to first menu card

closePlannerCardEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("dailyPlannerCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('work').offsetTop)
})

//code to close revision test card and return to solo projects card
goBackPlannerEl.addEventListener("click", function (event){
  document.getElementById("soloProjectsCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("row3Star").classList.remove("d-none");
  document.getElementById("dailyPlannerCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('soloProjectsCard').offsetTop)
})
//code to close solo projects card and open weather dashboard card
weatherDashboardEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row3Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("weatherCard").classList.remove("d-none")
});
//code to close weather dashboard card and return to first menu card

closeWeatherCardEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("weatherCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('work').offsetTop)
})

//code to close weather dashboard card and return to solo projects card
goBackWeatherEl.addEventListener("click", function (event){
  document.getElementById("soloProjectsCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("row3Star").classList.remove("d-none");
  document.getElementById("weatherCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('soloProjectsCard').offsetTop)
})
//code to open readme card and close solo projects card
readMeEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row3Star").classList.add("d-none");
  document.getElementById("soloProjectsCard").classList.add("d-none");
  document.getElementById("readMeCard").classList.remove("d-none")
});
//code to close weather dashboard card and return to first menu card

closeReadMeCardEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("readMeCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('work').offsetTop)
})

//code to close weather dashboard card and return to solo projects card
goBackReadMeEl.addEventListener("click", function (event){
  document.getElementById("soloProjectsCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("row3Star").classList.remove("d-none");
  document.getElementById("readMeCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('soloProjectsCard').offsetTop)
})





//code to close first menu card and open voluntary projects card
voluntaryEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("firstMenuCard").classList.add("d-none");
  document.getElementById("row4Star").classList.remove("d-none");
  document.getElementById("voluntaryCard").classList.remove("d-none");
  window.scrollTo(0, document.getElementById('voluntaryCard').offsetTop)
})

//code to close the voluntary projects card and return to the first menu card
closeVoluntaryProjectsEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("row4Star").classList.add("d-none");
  document.getElementById("voluntaryCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('work').offsetTop)
})
//code to close first menu card and collaborated projects card
collaboratedEl.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("row2Star").classList.add("d-none");
  document.getElementById("firstMenuCard").classList.add("d-none");
  document.getElementById("collaboratedStar").classList.remove("d-none");
  document.getElementById("collaboratedCard").classList.remove("d-none");
})
//code to close the collaborated projects card and return to the first menu card
closeCollaboratedProjectsEl.addEventListener("click", function (event){
  document.getElementById("firstMenuCard").classList.remove("d-none");
  document.getElementById("row2Star").classList.remove("d-none");
  document.getElementById("collaboratedStar").classList.add("d-none");
  document.getElementById("collaboratedCard").classList.add("d-none");
  // added code causes page to scroll back to work section instead of forcing user to do it
  window.scrollTo(0, document.getElementById('work').offsetTop)
})