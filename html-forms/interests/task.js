let inputs = Array.from(document.getElementsByTagName('input'));

function hasChildren() {
    if (this.closest('li').querySelector('ul')) {
        let nestedInputs = this.closest('li').querySelector('ul').querySelectorAll('input');
        if (this.checked) {
            nestedInputs.forEach(el => el.checked = true);
        } else {
            nestedInputs.forEach(el => el.checked = false);
        }
    }
}

function hasParent() {
    if (!this.closest('.interests_active')) {
        return;
    }

    let parentInput = this.closest('.interests_active').closest('.interest').querySelector('input');
    let childInputs = Array.from(parentInput.closest('li').querySelector('ul').querySelectorAll('input'));
    if (this.checked) {
        parentInput.checked = true;
    } else if (childInputs.every(el => el.indeterminate)) {
        parentInput.checked = false; // вот здесь не получилось
    }
   
    goFurther(parentInput);
}

function goFurther(el) {
    if (!el.closest('.interests_active')) {
        return;
    }

    let parentInput = el.closest('.interests_active').closest('.interest').querySelector('input');
    let childInputs = Array.from(parentInput.closest('li').querySelector('ul').querySelectorAll('input'));
    if (el.checked) {
        parentInput.checked = true;
    } else if (childInputs.every(el => el.indeterminate)) {
        parentInput.checked = false;
    }
   
    goFurther(parentInput);
}

for (let input of inputs) {
    input.addEventListener('change', hasParent);
    input.addEventListener('change', hasChildren);
}
