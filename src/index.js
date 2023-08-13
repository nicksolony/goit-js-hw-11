import PixabayApi from "./js/pixabay-api"
import { Notify } from "notiflix";
import Handlebars from "handlebars";
import imgTpl from './hbs/img.hbs';


let formEl = document.querySelector(`#search-form`);
let galleryEl = document.querySelector('.gallery');
let loadMoreBtn = document.querySelector('.load-more')

const template = Handlebars.compile("Name: {{name}}");

Notify.init({
    width: '400px',
    position: 'center-top',
    distance: '40px',
    clickToClose: true
})

hideLoadMore();

let pixabayApi = new PixabayApi();

formEl.addEventListener(`submit`, (e) => {
    e.preventDefault();
    searchImg(e.target.searchQuery.value)
})

loadMoreBtn.addEventListener('click',loadMorePhotos)

async function searchImg(searchQuery) {
    try {
        pixabayApi.query = searchQuery;

        pixabayApi.resetPage();
        clearGallery();
        showLoadMore();
       let result = await pixabayApi.fetchPhotos();
       galleryEl.insertAdjacentHTML('beforeend', imgTpl(result))
       if (!result[0]) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
       }
       console.log(result);   
    } catch (err) {
        Notify.failure(`We're sorry, an error has occurred. Please reload this page and try again.`);
    };
};

function clearGallery() {
    galleryEl.innerHTML="";
};


function showLoadMore() {
    loadMoreBtn.classList.remove('is-hidden');
};

function hideLoadMore() {
    loadMoreBtn.classList.add('is-hidden');
};

async function loadMorePhotos() {
    console.log('click');
    try {
       let result = await pixabayApi.fetchPhotos();
       galleryEl.insertAdjacentHTML('beforeend', imgTpl(result))
       if (!result[0]) {
        Notify.failure(`Sorry, we've loaded all images`)
       }
       console.log(result);   
    } catch (err) {
        Notify.failure(`We're sorry, an error has occurred. Please reload this page and try again.`);
    };
}