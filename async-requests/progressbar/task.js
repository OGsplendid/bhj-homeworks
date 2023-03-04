let progress = document.getElementById('progress');
let form = document.getElementById('form');

form.onsubmit = function() {
    let file = document.getElementById('file');
    if (file) {
        upload(file);
    }
    return false;
}

function upload(file) {
    let xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(e) {
        console.log(e.loaded, e.total);
    }
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    // let formData = new formData(form);
    xhr.send(file);
}
