let formEl = document.querySelector(`#search-form`);


formEl.addEventListener(`submit`, (e) => {
    e.preventDefault();
    console.log(e.target.searchQuery.value);
})