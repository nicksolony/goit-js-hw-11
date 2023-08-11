import pixabayApi from "./js/pixabay-api"
import { Notify } from "notiflix";

let formEl = document.querySelector(`#search-form`);

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
       if (!result[0]) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
       }       
    } catch (err) {
        Notify.failure(`We're sorry, an error has occurred. Please reload this page and try again.`);
    }


}
