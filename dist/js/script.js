// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const scriptURL = "https://script.google.com/macros/s/AKfycbyBzqZ22bwc1KFsCRRZferjSXawxp20d7x-e8x9_swQGkeqqLpQfiiG-veZjLRZ4TWl/exec";
const form = document.forms["porto-tailwind-form"];
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
