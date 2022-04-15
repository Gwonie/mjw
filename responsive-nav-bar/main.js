const menu = document.getElementById("menu-icon");
const changeContent = document.querySelectorAll(".change-content");

function changeContentHandler() {
  changeContent.forEach((elm) => {
    elm.classList.toggle("active");
  });
}

menu.addEventListener("click", changeContentHandler);
