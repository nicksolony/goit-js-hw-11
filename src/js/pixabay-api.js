import axios from "axios";

let API_KEY = '38783667-102dd7a1eb53387882edbc878';
let BASE_URL = 'https://pixabay.com/api/';

function fetchPhotos(searchQuery) {
    let url = `${BASE_URL}?key=${API_KEY}&q${searchQuery}`;
    return axios({
        baseURL: url,
        method: 'GET',
    })
    .then(response=>{
        console.log(response.data);
    });
};

export default fetchPhotos;

