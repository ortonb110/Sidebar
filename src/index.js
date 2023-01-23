const text = document.querySelector("#text");
const sideMenu = document.querySelector("#sidebar");
const btnSearch = document.querySelector("#search");
const btnRun = document.querySelector("#run");
const btnClose = document.querySelector("#close");

btnSearch.addEventListener("click", function () {
  text.textContent = "Whoa! You found me";
  sideMenu.classList.remove("left-[-450px]");
  sideMenu.classList.add("left-0");
});

btnClose.addEventListener("click", function () {
  sideMenu.classList.add("left-[-450px]");
  sideMenu.classList.remove("left-0");
});

btnRun.addEventListener("click", function () {
  text.textContent = "Please don't run!";
  sideMenu.classList.remove("left-[-450px]");
  sideMenu.classList.add("left-0");
});
