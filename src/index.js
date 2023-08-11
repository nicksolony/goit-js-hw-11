import pixabayApi from "./js/pixabay-api"
import { Notify } from "notiflix";

let formEl = document.querySelector(`#search-form`);


formEl.addEventListener(`submit`, (e) => {
    e.preventDefault();
    pixabayApi(e.target.searchQuery.value)
})

