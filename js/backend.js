'use strict';

(function() {
    var URL = 'https://js.dump.academy/code-and-magick/data';

    window.backend = {
        load: function(onLoad, onError) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
    
            xhr.addEventListener('load', function() {
                var error;
                switch (xhr.status) {
                    case 200:
                        onLoad(xhr.response);
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
    
            xhr.open('GET', URL);
            xhr.send();
        },
        save: function(data, onLoad, onError) {
            
        },
        showErrorMessage: function(errorMessage) {
            var node = document.createElement('div');
            node.style = 'z-index: 10; margin: 0 auto; text-align: center; background-color: red;'
            node.style.position = 'absolute';
            node.style.left = 0;
            node.style.right = 0;
            node.style.fontSize = '30px';
            node.textContent = errorMessage;
            document.body.insertAdjacentElement('afterbegin', node);
        }
    };
})();