let image = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
image.onclick = function () {
  const clicksCounter = +counter.textContent;
  counter.textContent++;

  if (clicksCounter % 2) {
    image.width = 200;
  } else {
    image.width = 250;
  }
}