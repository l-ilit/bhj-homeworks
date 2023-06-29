const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const getHole = (index) => document.getElementById(`hole${index}`);
let deadCounter = dead.textContent;
let lostCounter = lost.textContent;
let gameFunction = function () {
    for (let i = 1; i < 10; i++) {
        const hole = getHole(i);
        hole.onclick = () => {
            if (hole.classList.contains("hole_has-mole")) {
                deadCounter++;
            } else {
                lostCounter++;
            }
            if (deadCounter == 10) {
                alert ("Вы победили!");
                deadCounter = 0;
                lostCounter = 0;
                stop();
            } else if (lostCounter == 5) {
                alert ("Вы проиграли!");
                deadCounter = 0;
                lostCounter = 0;
                stop();
            }
            dead.textContent = deadCounter;
            lost.textContent = lostCounter;
        }
    }
}
gameFunction();