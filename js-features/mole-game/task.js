let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let getHole = (index) => document.getElementById("hole${index}");

for (let i = 1; i < 10; i++) {
  const hole = getHole(i);
   hole.onclick = function () {
      if (hole.className.includes("hole_has-mole")) {
        dead.textContent++;
      } 
      if (dead.textContent === 10) {
        alert("Вы победили!");
      } else {
        lost.textContent++;
      }
      if (lost.textContent === 5) {
        alert("Вы проиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
}
