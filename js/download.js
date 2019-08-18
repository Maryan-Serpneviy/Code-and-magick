'use strict';

(function() {
    window.download = function(onSuccess, onError, URL) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function() {
            if (xhr.status === 200) {
                onSuccess(xhr.response);
            } else {
                onError('Response status: ' + xhr.status + ' ' + xhr.statusText);
            }
        });
        xhr.addEventListener('error', function() {
            onError('Connection error');
        });
        xhr.addEventListener('timeout', function() {
            onError('Request did not manage to fulfill in' + (xhr.timeout / 1000) + ' s');
        });

        xhr.timeout = 10000;

        xhr.open('GET', URL);
        xhr.send();
    };
})();