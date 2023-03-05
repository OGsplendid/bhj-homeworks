let checkboxes = document.querySelector('ul');

checkboxes.onchange = function(e) {
    if (e.target.classList.contains('interest__check')) {
        hasChildren(e.target);
        hasParent(e.target);
    }
}

function hasChildren(el) {
    if (el.closest('li').querySelector('ul')) {
        let nestedInputs = el.closest('li').querySelector('ul').querySelectorAll('input');
        if (el.checked) {
            nestedInputs.forEach(el => el.checked = true);
        } else {
            nestedInputs.forEach(el => el.checked = false);
        }
    }
}

function hasParent(el) {
    if (!el.closest('ul').closest('.interest')) {
        return;
    }

    let parentInput = el.closest('ul').closest('li').querySelector('input');
    let parentChildInputs = Array.from(parentInput.closest('li').querySelector('ul').querySelectorAll('input'));
    console.log(parentChildInputs)

    if (el.checked || parentChildInputs.some(item => item.checked)) {
        parentInput.checked = true;
    } else {
        parentInput.checked = false;
    }

    hasParent(parentInput);
}
