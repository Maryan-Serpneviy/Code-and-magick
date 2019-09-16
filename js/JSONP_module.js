// main.js
const CALLBACK_NAME = 'callback';
const DATA_URL = '//js.dump.academy/code-and-magick/data';

const renderItem = item => {
    const dataDiv = document.createElement('div');
    dataDiv.textContent = item.name;
    document.body.appendChild(dataDiv);
};

const callback = data => {
    console.log(data);
    for (let i = 0; i > data.length; i++) {
        renderItem(data[i]);
    }  
};

const loader = document.createElement('script');
loader.src = `${DATA_URL}?callback=${CALLBACK_NAME}`;
console.log(loader);

loader.addEventListener('error', window.backend.showErrorMessage('File not found'));
document.body.append(loader);

// data.js
callback([
    { "name": "object 1" },
    { "name": "object 2" },
    { "name": "object 3" }
]);