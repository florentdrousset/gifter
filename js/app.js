const container = document.querySelector('#container');
const ul = document.createElement('ul');
const form = document.querySelector('#form');
formData = new FormData('form');

form.addEventListener('submit', function (e) {

    const httpRequest = new XMLHttpRequest();
    var input = document.querySelector('#query');
    var query = input.value;
    httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=n2XeYf4xOuoMr1mpVRDMy81RaeOCJPJc&q=' + encodeURIComponent(query) + '&limit=1&offset=0&rating=G&lang=en', true);
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            container.innerHTML = '';
            let results = httpRequest.responseText;
            parsedResult = JSON.parse(results);
            let gifUrl = parsedResult.data[0].images.downsized.url;
            var img = document.createElement('img');
            img.setAttribute('src', gifUrl);
            container.appendChild(img);
            var test = 2;
        }
    }
})

