let image = document.getElementById("cookie");
let counter = document.getElementById("Clicker__counter");
cookieClicker.onclick = function () {
  const clicksCounter = +counter.textContent;

  if (clicksCounter % 2) {
    image.width = 250;
  } else {
    image.width = 200;
  }
}