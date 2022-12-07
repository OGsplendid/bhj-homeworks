let initialTime = new Date();
let button = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');

button.onclick = () => {
  counter.innerHTML++;
  button.width = 200;
  let currentTime = new Date();
  let diffInSeconds = (currentTime.getTime() - initialTime.getTime()) / 1000;
  let timing = counter.textContent / diffInSeconds;
  document.getElementById('clicker__time').textContent = timing.toFixed(2);
};

button.onmousedown = () => {
  button.width = 150;
};
