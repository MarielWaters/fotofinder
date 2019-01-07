var create = document.querySelector('.btn--add-to-album');
var inputTitle = document.querySelector('.input--title');
var inputCaption = document.querySelector('.input--caption');
var cardSection = document.querySelector('.card-section');
var cardsArr = JSON.parse(localStorage.getItem('cards')) || [];
var reader = new FileReader();

window.addEventListener('load', appendCards);
create.addEventListener('click', createElement);

function appendCards() {
  cardsArr.forEach(function (card) {
    cardSection.innerHTML += `<article class="card" data-id="${card.id}">
      <header class="card__header" contenteditable="true">${card.title}</header>
      <figure class="card__image" src=${card.file}></figure>
      <figcaption class="card__image--caption" contenteditable="true">${card.caption}</figcaption>
      <footer class="card__footer">
        <img class="card__icons icons-delete" src="./assets/delete.svg" alt="delete">
        <img class="card__icons icons-favorite" src=${favoriteIconState(card.favorite)} alt="favorite">
      </footer>
    </article>`
  })
}

function favoriteIconState(favorite) {
  if (favorite) {
    return "./assets/favorite-active.svg"
  } else {
    return "./assets/favorite.svg"
  }
}
