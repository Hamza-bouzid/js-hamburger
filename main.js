const btnOpen = document.querySelector(".header-right > a");
const btnClose = document.querySelector(".close");
const hamburgerMenu = document.querySelector(".hamburger-menu");

btnOpen.addEventListener("click", function () {
  hamburgerMenu.classList.add("active");
});
btnClose.addEventListener("click", function () {
  hamburgerMenu.classList.remove("active");
});

/*
btnOpen.addEventListener("click", function () {
  hamburgerMenu.style.display = 'block';
});
btnClose.addEventListener("click", function () {
  hamburgerMenu.style.display = 'none';
});
*/
