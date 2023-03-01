let modal = document.getElementById('subscribe-modal');
let closeBtn = modal.querySelector('.modal__close_times');

function findCookie(name) {
    let value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

window.onload = () => {
    if (findCookie('modalactive') === 'true') {
        return;
    } else {
        modal.classList.add('modal_active');
    }
}

closeBtn.onclick = () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalactive=' + encodeURIComponent('true');
}
