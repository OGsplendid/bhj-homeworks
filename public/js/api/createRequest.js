/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ( { url, data, method, callback } ) => {
    data = {
        mail: '',
        password: ''
    },
    callback

    let xhr = new XMLHttpRequest();
    if (method = 'GET') {
        url = url + `?mail=${data.mail}&${data.password}`;
        try {
            xhr.open(method, url);
            xhr.responseType = 'json';
            xhr.send();
        } catch(err) {
            callback(err);
        }
    } else {
        let formData = new FormData();
        formData.append('mail', `${data.mail}`);
        formData.append('password', `${data.password}`);
        try {
            xhr.open(method, url);
            xhr.responseType = 'json';
            xhr.send(formData);
        } catch(err) {
            callback(err);
        }
    }

    xhr.onloadend = () => {
        if (xhr.status === 200) {
            callback(xhr.err, xhr.response);
        } else {
            callback(xhr.err);
        }
    }
};