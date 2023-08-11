import axios from "axios";

let API_KEY = '38783667-102dd7a1eb53387882edbc878';
let BASE_URL = 'https://pixabay.com/api/';
let IMAGE_TYPE = 'photo';
let ORIENT = 'horizontal';
let SAFE_SEARCH = 'true';

function fetchPhotos(searchQuery) {
    let url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=${IMAGE_TYPE}&orientation=${ORIENT}&safesearch=${SAFE_SEARCH}`;
    return axios({
        baseURL: url,
        method: 'GET',
    })
    .then(response=>{
        return response.data.hits.map(({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads
        })=>{
            let returnedResult = {
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads
            }
            return returnedResult
        });
    });
};

export default fetchPhotos;



// https://pixabay.com/api/?key=38783667-102dd7a1eb53387882edbc878&q=yellow+flowers&image_type=photo