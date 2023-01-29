"use strict";

const MENUBTN = document.querySelector(".menu_btn");
const NAVBAR = document.querySelector(".navbar");
const FOOTER = document.querySelector(".footer");
const NAVLOGO = document.querySelector(".logo");
const NAVBUTTONS = document.querySelectorAll(".navButton");

// ============================================================================ Navbar
function toggleNavMenu() {
  if (NAVBAR.classList.contains("open")) {
    NAVBAR.classList.remove("open");
    FOOTER.classList.remove("open");
  } else {
    NAVBAR.classList.add("open");
    FOOTER.classList.add("open");
  }
}

function logoClickHandler() {
  if (NAVBAR.classList.contains("open")) {
    NAVBAR.classList.remove("open");
    FOOTER.classList.remove("open");
  }
}

NAVLOGO.addEventListener("click", logoClickHandler);

MENUBTN.addEventListener("click", toggleNavMenu);

NAVBUTTONS.forEach((element) => {
  element.addEventListener("click", toggleNavMenu);
});

// ============================================================================ SwiperJS
// https://swiperjs.com/swiper-api
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "cube",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
