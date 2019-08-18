'use strict';

(function() {
    window.download = function(onSuccess, onError, URL) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function() {
            var error;
            switch (xhr.status) {
                case 200:
                    onSuccess(xhr.response);
                    break;
                case 400:
                    error = 'Bad request';
                    break;
                case 401:
                    error = 'User not authorized';
                    break;
                case 404:
                    error = 'Not found';
                    break;
                default:
                    error = 'Response status: ' + xhr.status + ' ' + xhr.statusText;
            }

            if (error) {
                onError(error);
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