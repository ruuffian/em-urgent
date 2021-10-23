const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

// inline with arror functions (pass the function)
menu.addEventListener("click", mobileMenu);

// Show Active Menu When Scrolling

const highlighMenu = () => {
    
}