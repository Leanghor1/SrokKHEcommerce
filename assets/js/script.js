"use strict";
//Modal Varriable
const modal = document.querySelector("[data-modal]");
const modalCloseOverlay = document.querySelector("[data-model-overlay]");
//const modalCloseBtn = document.querySelector("[data-modal-close]");
//Modal Function
const modalColseFunc = function () {
  modal.classList.add("closed");
};
//Modal addEventListener
modalCloseOverlay.addEventListener("click", modalColseFunc);
//modalCloseBtn.addEventListener("click", modalColseFunc);

//notification toast Varriable
const notificationToast = document.querySelector("[data-toast]");
const toastBtnColse = document.querySelector("[data-toast-close]");
//notification toast  addEventListener
toastBtnColse.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});

//mobile Menu Varriable
const mobileMenuOpenBtn = document.querySelectorAll("[data-menu-open-btn]");
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const moblieMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[date-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  //function moblie menu
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };
  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });
  moblieMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

//accordion var
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;
      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }
    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}
