function startGame() {
    let holes = document.getElementsByClassName('hole');
    let scores = document.getElementById('dead');
    let losses = document.getElementById('lost');
    scores.textContent = 0;
    losses.textContent = 0;
    for (let i = 0; i < holes.length; i++) {
        holes[i].onclick = () => {
            if (holes[i].className.includes('hole_has-mole')) {
                scores.textContent++;
            } else {
                losses.textContent++;
            }
        };
    }
    if (scores.textContent === 10) {
        scores.textContent = 0;
        losses.textContent = 0;
        alert('You win!');
    } else if (losses.textContent === 5) {
        scores.textContent = 0;
        losses.textContent = 0;
        alert('You lose!');
    }
  };
  
  startGame();
