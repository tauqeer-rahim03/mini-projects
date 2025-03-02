const display = document.getElementById("display");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

let startTime;
let running = false;
let elapsedTime = 0;
let intervalId;

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function updateDisplay() {
    const currentTime = Math.floor(elapsedTime / 1000);
    display.textContent = formatTime(currentTime);
}

start.addEventListener("click", function () {
    if (start.innerHTML === "Start") {
        if (!running) {
            startTime = Date.now() - elapsedTime;
            intervalId = setInterval(function () {
                elapsedTime = Date.now() - startTime;
                updateDisplay();
            }, 1000);
            running = true;
        }
        start.innerHTML = "Stop";
        start.style.backgroundColor = "red";
    } else if (start.innerHTML === "Stop") {
        if (running) {
            clearInterval(intervalId);
            running = false;
            start.innerHTML = "Start";
            start.style.backgroundColor = "black";
        }
    }
});

reset.addEventListener("click", function () {
    clearInterval(intervalId);
    running = false;
    elapsedTime = 0;
    updateDisplay();
    start.innerHTML = "Start";
    start.style.backgroundColor = "black";
});
