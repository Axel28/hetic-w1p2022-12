let menu = document.querySelector(".menu");
let nav = document.querySelector(".overlay");

menu.addEventListener("click", function() {
  menu.classList.toggle("active");
  nav.classList.toggle("menu-open");
});
