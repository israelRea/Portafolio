import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //when we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");

let _img = document.querySelector("img");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");


const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
  console.log(getCurrentTheme())
  if (getCurrentTheme() === 'dark') {
    _img.src = "rtlogo_w_t.png";
   
  } else {
    _img.src = "rtlogo_b_t.png";
 
  }
}

function change_logo() {
  if (getCurrentTheme() === 'dark') {
    _img.src = "rtlogo_w_t.png";
  } else {
    _img.src = "rtlogo_b_t.png";
  }
}
themeButton.addEventListener("click", () => {

  console.log("================")
  console.log(darkTheme)
  console.log(iconTheme)
  console.log("================")

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  change_logo();
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
 
});
/*==================== RENDER APP CONTENT ====================*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll(".skills_head");

function toggleSkills() {
  console.log("click");
  let itemClass = this.parentNode.className;

  for (var i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }

  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATIONS TAB ====================*/
const tabs = document.querySelectorAll("[data-target]"),
tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
tab.addEventListener("click", () => {
  console.log("clicked");
  const target = document.querySelector(tab.dataset.target);

  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("qualifications_active");
  });
  target.classList.add("qualifications_active");

  tabs.forEach((tab) => {
    tab.classList.remove("qualifications_active");
  });
  tab.classList.add("qualifications_active");
});
}); 
/*==================== SERVICE MODAL ====================*/
const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
