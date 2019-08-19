'use strict';

(function() {
    var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
    var SAVE_URL = 'https://js.dump.academy/code-and-magick/data';

    window.backend = {
        request: function(onLoad, onError, url, method, data) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
    
            xhr.addEventListener('load', function() {
                var error;
                switch (xhr.status) {
                    case 200:
                        onLoad(xhr.response); // downloadSimilars(arr)
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
                this.showErrorMessage('Connection error');
            });
            xhr.addEventListener('timeout', function() {
                this.showErrorMessage('Request did not manage to fulfill in' + (xhr.timeout / 1000) + ' s');
            });
    
            xhr.timeout = 10000;
    
            xhr.open(method, url);
            xhr.send(data);
        },
        load: function(onLoad, onError) {
            this.request(onLoad, onError, LOAD_URL, 'GET');
        },
        save: function(data, onLoad, onError) {
            this.request(onLoad, onError, SAVE_URL, 'POST', data);
        },
        showErrorMessage: function(errorMessage) {
            var node = document.createElement('div');
            node.style = 'z-index: 10; margin: 0 auto;';
            node.style.textAlign = 'center';
            node.style.backgroundColor = 'red';
            node.style.position = 'absolute';
            node.style.left = 0;
            node.style.right = 0;
            node.style.fontSize = '30px';
            node.textContent = errorMessage;
            document.body.insertAdjacentElement('afterbegin', node);
        }
    };
})();