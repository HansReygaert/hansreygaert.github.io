// ENABLES BOOTSTRAP POPOVERS EVERYWHERE => REQUIRES POPPER
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


// Small delay before moving on so animations can take effect
function delay (URL) {
   setTimeout( function() { window.location = URL }, 300 );
}

const interests = document.querySelector('#interests .card-interests');

//Pre-load the interest content with a default state 
$(document).ready(function($)
{
	displayGuitarHtml(interests);
});

function displayGuitarHtml(target){
   // Not the best way of doing things but it serves it purpose for now
   injectHTMLInTarget(interests, "../pages/guitar.html")
}
function displayFoodieHtml(){
   injectHTMLInTarget( interests, "../pages/foodie.html" );
}
function displayRocketLeagueHtml(){
   injectHTMLInTarget(interests, "../pages/rocket-league.html" );
}
function displayReadingHtml(){
   injectHTMLInTarget( interests, "../pages/reading.html" );
}

function displayCodeHtml(){
   injectHTMLInTarget( interests, "../pages/code.html");
}

function injectHTMLInTarget(elementToDisplayIn, linkToPage){
   $(elementToDisplayIn).load(linkToPage);
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPosition = window.pageYOffset;
const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  let currentScrollPosition = window.pageYOffset;
  if (prevScrollPosition > currentScrollPosition) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-150px";
  }
  prevScrollPosition = currentScrollPosition;
}