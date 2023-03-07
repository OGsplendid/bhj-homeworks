let button = document.getElementById('clear__all');
let editor = document.getElementById('editor');

editor.onkeyup = () => {
    localStorage.setItem('text', editor.value);
}

window.onload = () => {
    editor.value = localStorage.getItem('text');
}

button.onclick = function() {
    editor.value = '';
    localStorage.removeItem('text');
}
