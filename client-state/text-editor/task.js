let button = document.getElementById('clear__all');
let editor = document.getElementById('editor');

editor.onkeyup = () => {
    localStorage.clear();
    localStorage.setItem('text', JSON.stringify(editor.value));
}

window.onload = () => {
    if (localStorage.getItem('text')) {
        let storedText;
        try {
            storedText = JSON.parse(localStorage.getItem('text'));
        } catch(e){
            return null;
        }
        editor.value = storedText;
    }
}

button.onclick = function() {
    editor.value = '';
    localStorage.clear();
}
