const mobileBtn = document.querySelector(".hamburger-btn");
const body = document.querySelector("body");

mobileBtn.addEventListener("click", function () {
  const mobileNav = document.querySelector(".hamburger-menu");
  mobileNav.classList.toggle("activate");
  body.classList.add("mobile-activate");
});
