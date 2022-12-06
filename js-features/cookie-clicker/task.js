let initialTime = new Date();

let button = document.getElementById('cookie');
button.onclick = () => {
  document.getElementById('clicker__counter').innerHTML++;
  button.width = 200;
  let currentTime = new Date();
  let diffInSeconds = (currentTime - initialTime) * 60 * 24;
  let timing = diffInSeconds / clicker__counter.textContent;
  document.getElementById('clicker__time').textContent = timing;
};

button.onmousedown = () => {
  button.width = 150;
};
