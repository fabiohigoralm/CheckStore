var button = document.getElementsByClassName("menu-icon")[0];
var menu = document.getElementsByClassName("menu-mobile")[0];
var item = document.getElementsByClassName("menu-item");
console.log(item);
button.addEventListener("click", function handleClick(event) {
  menu.classList.toggle("menu-open");
  button.classList.toggle("menu-icon-close");
});
document.addEventListener("click", function closeMenu(event) {
  const isClickInside = menu.contains(event.target);
  if (!isClickInside) {
    menu.classList.remove("menu-open");
    button.classList.remove("menu-icon-close");
  }
});
[...item].forEach(function (element) {
  element.addEventListener("click", function (event) {
    menu.classList.remove("menu-open");
    button.classList.remove("menu-icon-close");
  });
});
