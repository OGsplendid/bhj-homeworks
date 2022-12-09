let currentCount = 10;

let countDown = setInterval(function() {
  document.getElementById("timer").innerHTML = currentCount;
  currentCount--;
  if (currentCount < 0) {
    clearInterval(countDown);
    alert('Вы победили в конкурсе!');
  }
}, 1000);



let currentHours, currentMinutes, currentSeconds;
currentHours = 0;
currentMinutes = 0;
currentSeconds = 15;

let theFinalCountdown = setInterval(function() {
  document.getElementById("timerHours").innerHTML = currentHours;
  document.getElementById("timerMinutes").innerHTML = currentMinutes;
  document.getElementById("timerSeconds").innerHTML = currentSeconds;
  currentSeconds--;
  if (currentSeconds < 0) {
    currentMinutes--;
    currentSeconds = 59;
  }
  if (currentMinutes < 0) {
    currentHours--;
    currentMinutes = 59;
  }
  if (currentHours === -1) {
    alert('Вы победили в конкурсе!');
    clearInterval(theFinalCountdown);
  }
}, 1000);



// let countDown = setInterval(function() {
//   document.getElementById("timer").innerHTML = currentCount;
//   currentCount--;
//   if (currentCount < 0) {
//     clearInterval(countDown);
//     window.location.assign("http://www.mozilla.org");
//   }
// }, 1000);
