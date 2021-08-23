// ENABLES BOOTSTRAP POPOVERS EVERYWHERE => REQUIRES POPPER
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


function delay (URL) {
   setTimeout( function() { window.location = URL }, 300 );
}

const interests = document.querySelector('#interests .card-interests');
let content = "";

function displayGuitarHtml(target){
   console.log(target);
   // Not the best way of doing things but it serves it purpose for now
   displayCardInformation(interests, "../pages/guitar.html")
}
function displayFoodieHtml(){
   displayCardInformation( interests, "../pages/foodie.html" );
}
function displayCodeHtml(){
   displayCardInformation( interests, "../pages/code.html" );
}
function displayWineHtml(){
   displayCardInformation( interests, "../pages/wine.html" );
}
function displayRocketLeagueHtml(){
   displayCardInformation(interests, "../pages/rocket-league.html" );
}
function displayReadingHtml(){
   displayCardInformation( interests, "../pages/reading.html" );
}

function displayCardInformation(elementToDisplayIn, linkToPage){
   $(elementToDisplayIn).load(linkToPage);
}