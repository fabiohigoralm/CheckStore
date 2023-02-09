var button = document.getElementsByClassName("menu-icon")[0];
var menu = document.getElementsByClassName("menu-mobile")[0];
button.addEventListener("click", function handleClick() {
  menu.classList.toggle("menu-open");
  button.classList.toggle("menu-icon-close");
});
