const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Show Active Menu When Scrolling
const highlightMenu = () => {
  const element = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  const signupMenu = document.querySelector("#signup");

  let scroll = window.scrollY;

  if (window.innerWidth > 960) {
    if (scroll < 600) {
      homeMenu.classList.add("highlight");
      aboutMenu.classList.remove("highlight");
      return;
    } else if (scroll < 1450) {
      homeMenu.classList.remove("highlight");
      aboutMenu.classList.add("highlight");
      servicesMenu.classList.remove("highlight");
      return;
    } else if (scroll < 2473) {
      aboutMenu.classList.remove("highlight");
      signupMenu.classList.remove("highlight");
      servicesMenu.classList.add("highlight");
      return;
    } else {
      signupMenu.classList.add("highlight");
      servicesMenu.classList.remove("highlight");
      return;
    }
  }

  if ((element && scroll < 600) || element) {
    element.classList.remove("highlight");
  }
};

const states = ["scroll", "click", "load"];
states.forEach((state) => window.addEventListener(state, highlightMenu));

// Close Mobile Menu After Clicking It
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth < 960) {
    if (menuBars) {
      menu.classList.toggle("is-active");
      menuLinks.classList.remove("active");
    }
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
