function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document
    .getElementsByClassName("main-content")[0]
    .classList.toggle("change2");
}
