let blocks = Array.from(document.getElementsByClassName('reveal'));
let { innerHeight } = window;

function isVisible() {
    for (let i = 0; i < blocks.length; i++) {
        let { top } = blocks[i].getBoundingClientRect();
        let { bottom } = blocks[i].getBoundingClientRect();

        if (top < innerHeight && bottom > 0) {
            blocks[i].className = 'reveal reveal_active';
        } else {
            blocks[i].className = 'reveal';
        }
    }
}

window.addEventListener('scroll', isVisible);
