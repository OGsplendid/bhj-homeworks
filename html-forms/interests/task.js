let nestedUls = Array.from(document.getElementsByClassName('interests_active'));

// обычный уровень:
for (let ul of nestedUls) {
    let mainInput = ul.closest('li').querySelector('input');
    let nestedInputs = ul.querySelectorAll('input');
    mainInput.onchange = () => {
        if (mainInput.checked) {
            nestedInputs.forEach(el => el.checked = true);
        } else {
            nestedInputs.forEach(el => el.checked = false);
        }
    }

    // function mark() {
    //     for (let input of nestedInputs) {
    //         if (input.checked === true) {
    //             input.closest('ul').closest('.interest').querySelector('input').checked = true;
    //         }
    //         if (nestedInputs.every(el => el.indeterminate)) {
    //             input.closest('ul').closest('.interest').querySelector('input').checked = false;
    //         }
    //     }
    //     mark();
    // }
    // for (let input of nestedInputs) {
    //     input.addEventListener('change', mark);
    // }
}
