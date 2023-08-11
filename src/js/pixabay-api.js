import axios from "axios";

let API_KEY = '38783667-102dd7a1eb53387882edbc878';
let BASE_URL = 'https://pixabay.com/api/';

function fetchPhotos(searchQuery) {
    return axios.get({
        baseURL: `${BASE_URL}?key=${API_KEY}&q${searchQuery}`
    })
    .then(response=>console.log(response);)
};

export default fetchPhotos;

https://pixabay.com/api/?key=38783667-102dd7a1eb53387882edbc878&q=yellow+flowers&image_type=photo