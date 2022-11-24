var deButton = document.querySelector("header button");
// menu-button luistert naar klik en voert dan een functie uit
var deButtonImg = document.querySelector("header button img");
var deNav = document.querySelector("header nav");


deButton.addEventListener("click", toggleMenu);
// Nieuwe functie toggleMenu

function toggleMenu() {
  // nav opgeslagen als variabelen

  // nav krijgt class toonMenu

  deNav.classList.toggle("toonMenu");
  // deButtonImg.classList.toggle("swapImg")

  deButton.classList.toggle("swapImg")
}