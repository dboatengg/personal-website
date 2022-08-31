// accessing DOM elements
const hamburger = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".nav-menu"),
  navLink = document.querySelectorAll(".nav-link"),
  bodyMain = document.querySelector(".main"),
  navbar = document.querySelector(".navbar"),
  darkLogo = document.querySelector(".logo-dark"),
  lightLogo = document.querySelector(".logo-light"),
  iconMoon = document.querySelector(".icon-moon"),
  iconSun = document.querySelector(".icon-sun");

// toggle nav menu
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// close nav menu when user clicks anywhere on the page except on nav menu
bodyMain.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

// close nav menu when user click on a nav link
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// detect scroll to implement fixed header
window.onscroll = function () {
  let distanceScrolled = document.documentElement.scrollTop;
  if (distanceScrolled > 30) {
    navbar.classList.add("shadow");
  }
  if (distanceScrolled < 20) {
    navbar.classList.remove("shadow");
  }
};

// iimplement light/dark mode
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("prefers-color-scheme: dark").matches;

const iconToggle = () => {
  iconMoon.classList.toggle("display-none");
  iconSun.classList.toggle("display-none");
  lightLogo.classList.toggle("display-none");
  darkLogo.classList.toggle("display-none");
};

// Initial theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    iconMoon.classList.add("display-none");
    darkLogo.classList.add("display-none");
    return;
  }
  iconSun.classList.add("display-none");
  lightLogo.classList.add("display-none");
};

// Manual theme switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// call theme switch on clicking buttons
iconSun.addEventListener("click", () => {
  themeSwitch();
});
iconMoon.addEventListener("click", () => {
  themeSwitch();
});

// invoke theme check on initial load
themeCheck();
