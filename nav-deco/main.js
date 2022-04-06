window.onload = function () {
  document.getElementById("horizantal-about").click();
  document.getElementById("vertical-about").click();
};

const horizantalMenus = document.querySelectorAll("nav:first-child a");
const horizantalUnderline = document.getElementById("horizantal-underline");

const verticalMenus = document.querySelectorAll("nav:nth-child(2) a");
const verticalUnderline = document.getElementById("vertical-underline");

// 수평메뉴 밑줄 생성
horizantalMenus.forEach((menu) => {
  menu.addEventListener("click", (e) => horizantalIndicator(e));
  menu.addEventListener("resize", (e) => horizantalIndicator(e));
});
function horizantalIndicator(e) {
  horizantalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  horizantalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  horizantalUnderline.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

//수직메뉴 밑줄 생성
verticalMenus.forEach((menu) => {
  menu.addEventListener("click", (e) => verticalIndicator(e));
});
function verticalIndicator(e) {
  verticalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  verticalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  verticalUnderline.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}
