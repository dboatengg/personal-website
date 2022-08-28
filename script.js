// accessing DOM elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const body = document.querySelector(".main");
const navbar = document.querySelector(".navbar");
const darkLogo = document.querySelector(".logo-dark");
const lightLogo = document.querySelector(".logo-light");
const iconMoon = document.querySelector(".icon-moon");
const iconSun = document.querySelector(".icon-sun");

hamburger.addEventListener("click", mobileMenu);
body.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

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
    // console.log(distanceScrolled);
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
