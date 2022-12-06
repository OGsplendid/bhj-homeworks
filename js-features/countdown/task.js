let currentCount = 59;

let countDown = setInterval(function() {
  document.getElementById("timer").leftTime = currentCount;
  currentCount--;
  if (currentCount <= 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(countDown);
  }
}, 1000);
