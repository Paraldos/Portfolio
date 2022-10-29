"use strict";

const MENUBTN = document.querySelector(".menu_btn");
const NAVBAR = document.querySelector(".navbar");
const FOOTER = document.querySelector(".footer");

// opens and close navbar if screen is smaller then 850 px
MENUBTN.addEventListener("click", () => {
  if (NAVBAR.classList.contains("open")) {
    NAVBAR.classList.remove("open");
    FOOTER.classList.remove("open");
  } else {
    NAVBAR.classList.add("open");
    FOOTER.classList.add("open");
  }
});
