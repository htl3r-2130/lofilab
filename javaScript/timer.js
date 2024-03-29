const start = document.querySelector("#startTimer");
const stop = document.querySelector("#stopTimer");
const resume = document.querySelector("#resumeTimer");
const reset = document.querySelector("#resetTimer");

let countdownInterval;
let time;

start.addEventListener("click", function() {
    let startMinutes = document.querySelector("#timerInp").value;
    time = startMinutes * 60;
    const countdownEl = document.querySelector("#timerTime");

    if (!isNaN(startMinutes) && startMinutes > 0) {
        start.style.display = "none";
        stop.style.display = "flex";
        reset.style.display = "flex";
        countdownInterval = setInterval(function() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            countdownEl.innerHTML = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
            time--;

            if (time < 0) {
                clearInterval(countdownInterval);
                alert("Time is up!");
                resetTimer();
            }
        }, 1000);
    }
});

stop.addEventListener("click", function() {
    stop.style.display = "none";
    resume.style.display = "flex";
    clearInterval(countdownInterval);
});

resume.addEventListener("click", function() {
    const countdownEl = document.querySelector("#timerTime");
    stop.style.display = "flex";
    resume.style.display = "none";

    countdownInterval = setInterval(function() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        countdownEl.innerHTML = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        time--;

        if (time < 0) {
            clearInterval(countdownInterval);
            alert("Time is up!");
            resetTimer();
        }
    }, 1000);
});

reset.addEventListener("click", resetTimer);

function resetTimer() {
    clearInterval(countdownInterval);
    start.style.display = "inline";
    stop.style.display = "none";
    resume.style.display = "none";
    reset.style.display = "none";

    const countdownEl = document.querySelector("#timerTime");
    countdownEl.innerHTML = "0:00";
    time = 0;
    document.querySelector("#timerInp").value = "";
}
