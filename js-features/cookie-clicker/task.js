let initialTime = new Date();
let button = document.getElementById('cookie');

button.onclick = () => {
  document.getElementById('clicker__counter').innerHTML++;
  button.width = 200;
  let currentTime = new Date();
  let diffInSeconds = (currentTime.getTime() - initialTime.getTime()) / 1000;
  let timing = diffInSeconds / clicker__counter.textContent;
  document.getElementById('clicker__time').textContent = timing.toFixed(2);
};

button.onmousedown = () => {
  button.width = 150;
};
