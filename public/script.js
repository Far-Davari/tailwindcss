const burgerMenu = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");

function hideShowMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden")
  } else {
    menu.classList.add("hidden")
  }
}

burgerMenu.addEventListener("click", hideShowMenu);