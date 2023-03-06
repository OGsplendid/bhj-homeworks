const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.onsubmit = function(e) {
    e.preventDefault();

    let input = this.elements.file;
    let file = input.files[0];

    if (file) {
        upload(file);
    }
}

function upload(file) {
    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(e) {
        progress.value = (e.loaded / e.total).toFixed(1);
    }

    xhr.onloadend = function() {
        if (xhr.status == 200) {
          console.log("Успех");
        } else {
          console.log("Ошибка " + this.status);
        }
    }
    let formData = new FormData();
    formData.append('file', file);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
}
