"use strict";

const MENUBTN = document.querySelector(".menu_btn");
const NAVBAR = document.querySelector(".navbar");

// opens and close navbar if screen is smaller then 850 px
MENUBTN.addEventListener("click", () => {
  if (NAVBAR.classList.contains("open")) {
    NAVBAR.classList.remove("open");
  } else {
    NAVBAR.classList.add("open");
  }
  nav_Menu = !nav_Menu;
});
