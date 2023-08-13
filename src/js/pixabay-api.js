import axios from "axios";

let API_KEY = '38783667-102dd7a1eb53387882edbc878';
let BASE_URL = 'https://pixabay.com/api/';
let IMAGE_TYPE = 'photo';
let ORIENT = 'horizontal';
let SAFE_SEARCH = 'true';
let PER_PAGE = 40;

export default class PixabayApi {

    constructor() {
        this.searchQuery = '';
        this.page = 1;        
    }


    async fetchPhotos() {
        let url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=${IMAGE_TYPE}&orientation=${ORIENT}&safesearch=${SAFE_SEARCH}&per_page=${PER_PAGE}&page=${this.page}`;

        let response = await axios({
            baseURL: url,
            method: 'GET',
        });

        let resultsArray = await response.data.hits.map(({
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
            this.incrementPage()
            return resultsArray;
    };


    incrementPage() {
        this.page += 1;
      };
    
      resetPage() {
        this.page = 1;
      };
    
      get query() {
        return this.searchQuery;
      };
    
      set query(newQuery) {
        this.searchQuery = newQuery;
      };
}
// export default fetchPhotos;



// https://pixabay.com/api/?key=38783667-102dd7a1eb53387882edbc878&q=yellow+flowers&image_type=photo