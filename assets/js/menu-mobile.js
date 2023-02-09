var button = document.getElementsByClassName("menu-icon")[0];
var menu = document.getElementsByClassName("menu-mobile")[0];
button.addEventListener("click", function handleClick(event) {
  menu.classList.toggle("menu-open");
  button.classList.toggle("menu-icon-close");
});
document.addEventListener("click", function closeMenu(event) {
  const isClickInside = menu.contains(event.target);
  if (!isClickInside) {
    menu.classList.remove("menu-open");
  }
});
