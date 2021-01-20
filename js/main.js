const hourFormat = document.getElementById("hours");
const minuteFormat = document.getElementById("minutes");
const secondsFormat = document.getElementById("seconds");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const resumeBtn = document.getElementById("resume");

let hours = 0;
let minutes = 0;
let seconds = 55;

let startTimer;

hourFormat.innerHTML = hours;
minuteFormat.innerHTML = minutes;
secondsFormat.innerHTML = seconds;

const runTimer = () => {
  startTimer = setInterval(() => {
    hourFormat.innerHTML = hours;
    minuteFormat.innerHTML = minutes;
    secondsFormat.innerHTML = seconds++;
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(startTimer);
};

const stopTimer = () => {
  clearInterval(startTimer);
  hours = 0;
  minutes = 0;
  seconds = 0;

  hourFormat.innerHTML = hours;
  minuteFormat.innerHTML = minutes;
  secondsFormat.innerHTML = seconds;
};

startBtn.onclick = () => runTimer();
pauseBtn.onclick = () => pauseTimer();
resumeBtn.onclick = () => runTimer();
stopBtn.onclick = () => stopTimer();
