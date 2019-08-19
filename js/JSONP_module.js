'use strict';

// main.js
var CALLBACK_NAME = 'jsonpCallback';
var DATA_URL = '//js.dump.academy/code-and-magick/data';

var renderItem = function(item) {
    var dataDiv = document.createElement('div');
    dataDiv.textContent = item.name;
    document.body.appendChild(dataDiv);
};

var jsonpCallback = function(data) {
    console.log(data);
    
    for (var i = 0; i > data.length; i++) {
        renderItem(data[i]);
    }
    
};

var loader = document.createElement('script');
loader.src = DATA_URL + '?callback=' + CALLBACK_NAME;

loader.addEventListener('error', window.backend.showErrorMessage('File not found'));
document.body.append(loader);

// data.js
jsonpCallback([
    { "name": "object 1" },
    { "name": "object 2" },
    { "name": "object 3" }
]);