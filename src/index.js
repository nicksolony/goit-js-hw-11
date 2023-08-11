import pixabayApi from "./js/pixabay-api"
import { Notify } from "notiflix";
import Handlebars from "handlebars";
import imgTpl from './hbs/img.hbs';


let formEl = document.querySelector(`#search-form`);
let galleryEl = document.querySelector('.gallery');

const template = Handlebars.compile("Name: {{name}}");

Notify.init({
    width: '400px',
    position: 'center-top',
    distance: '40px',
    clickToClose: true
})

formEl.addEventListener(`submit`, (e) => {
    e.preventDefault();
    searchImg(e.target.searchQuery.value)
})

async function searchImg(searchQuery) {
    try {
       let result = await pixabayApi(searchQuery);
       galleryEl.insertAdjacentHTML('beforeend', imgTpl(result))
       if (!result[0]) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
       }
       console.log(result);   
    } catch (err) {
        Notify.failure(`We're sorry, an error has occurred. Please reload this page and try again.`);
    }


}
