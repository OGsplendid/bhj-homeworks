let currentCount = 10;

let countDown = setInterval(function() {
  document.getElementById("timer").innerHTML = currentCount;
  currentCount--;
  if (currentCount < 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(countDown);
  }
}, 1000);



let currentHours, currentMinutes, currentSeconds;
currentHours = 04;
currentMinutes = 01;
currentSeconds = 10;

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
  if (currentHours === 0 && currentMinutes === 00 && currentSeconds === 00) {
    clearInterval(theFinalCountdown);
  }
}, 1000);



// let countDown = setInterval(function() {
//   document.getElementById("timer").innerHTML = currentCount;
//   currentCount--;
//   if (currentCount < 0) {
//     window.location.assign("http://www.mozilla.org");
//     clearInterval(countDown);
//   }
// }, 1000);
