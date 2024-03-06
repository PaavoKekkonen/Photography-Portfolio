const nav = document.querySelector(".nav-menu");
const burger = document.querySelector(".hamburger");

const menuBurger = document.querySelector(".menu-nav");

// reagoi burgerin tai "menu"-tekstin klikkaamiseen
menuBurger.addEventListener("click", function () {
    navMenu();
});

// avaa tai sulkee navigointimenun ja muuttaa myös burger-ikonia
function navMenu() {
    burger.classList.toggle("change");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
};