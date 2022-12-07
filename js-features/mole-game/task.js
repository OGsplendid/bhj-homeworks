(() => {
  let playing = true,
    activeHole = 1;
  let scores = 0;
  let losses = 0;
  document.getElementById('dead').textContent = scores;
  document.getElementById('lost').textContent = losses;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole(index).className = 'hole',
    activateHole = index =>
      getHole(index).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 9);
      activateHole(activeHole);
      next();
      getHole.onclick = function() {
        if (getHole(index).className === 'hole') {
          scores++;
        } else {
          losses++;
        }
        if (scores === 10) {
          alert('Victory!');
        } else {
          alert('You lose!');
        }
      }
    }, 800 );

  next();
})();
