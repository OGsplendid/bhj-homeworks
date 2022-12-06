let currentCount = 59;

let countDown = setInterval(function() {
  document.getElementById("timer").innerHTML = currentCount;
  currentCount--;
  if (currentCount <= 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(countDown);
  }
}, 1000);



let currentHours, currentMinutes, currentSeconds;
currentHours = 04;
currentMinutes = 25;
currentSeconds = 19;
let currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;


function theFinalCountdown () {
  let countDown = setInterval(function() {
  document.getElementById("timer").innerHTML = currentTime;
  currentSeconds--;
  }, 1000);
  if (currentSeconds === 00) {
    currentMinutes--;
  }
  if (currentMinutes === 00) {
    currentHours--;
  }
};

theFinalCountdown();



let currentCount = 59;

let countDown = setInterval(function() {
  document.getElementById("timer").innerHTML = currentCount;
  currentCount--;
  if (currentCount <= 0) {
    window.location.assign("http://www.mozilla.org");
    clearInterval(countDown);
  }
}, 1000);
