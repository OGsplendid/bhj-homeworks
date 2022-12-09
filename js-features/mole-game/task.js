function startGame() {
  let holes = document.getElementsByClassName('hole');
  let scores = 0;
  let losses = 0;
  let timerId = setInterval(function() {
    for (let i = 0; i < holes.length; i++) {
      if (holes[i].className.includes('hole hole_has-mole')) {
        holes[i].className = 'hole';
      }
      if (i === Math.floor(Math.random() * 8)) {
        holes[i].className = 'hole hole_has-mole';
      }
      holes[i].onclick = function() {
        if (holes[i].className.includes('hole hole_has-mole')) {
          scores++;
        } else {
          losses++;
        }
      }
    }
  }, 1000);
  if (scores === 10) {
    alert('You win!');
  } else if (losses === 10) {
    alert('You lose!');
  }
}
