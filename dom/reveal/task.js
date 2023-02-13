(() => {
    let blocks = Array.from(document.getElementsByClassName('reveal'));
    let viewportHeight = window.innerHeight;

    for (let i = 0; i < blocks.length; i++) {

        setInterval(() => {
            let top = blocks[i].getBoundingClientRect().top;
            let bottom = blocks[i].getBoundingClientRect().bottom;
            console.log(top, bottom, viewportHeight);
        }, 1000);

        blocks[i].onscroll = () => {

            if (top < viewportHeight && bottom > 0) {
                blocks[i].className = 'reveal reveal_active';
            } else {
                blocks[i].className = 'reveal';
            }
        }
    }
})();
