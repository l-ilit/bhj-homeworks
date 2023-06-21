
let time = 59;
const timer = document.getElementById("timer");
function countDown () {
    let seconds = Math.floor(time%60);
    let minutes = Math.floor((time/60)%60);
    let hours = Math.floor((time/3600)%60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;
    timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":";
    if (seconds = 0 && minutes = 0 && hours = 0) {
        clearTimeout(countDown);
        alert("Вы победили в конкурсе");
    } else {
        time --;
        setTimeout(countDown, 1000);
    }
}
countDown();