var createBtn = document.querySelector('.btn--add-to-album');
var inputTitle = document.querySelector('.input--title');
var inputCaption = document.querySelector('.input--caption');
var fileInput = document.querySelector('.input-file');
var cardSection = document.querySelector('.card-section');
var cardsArr = JSON.parse(localStorage.getItem('cards')) || [];
var reader = new FileReader();

// window.addEventListener('load', appendCards);
createBtn.addEventListener('click', createElement);

// don't touch this!
function createElement(e) {
  // console.log(fileInput.files[0])
  e.preventDefault();
  if (fileInput.files[0]) {
    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = objectCard;
  }
}

// show cards from card array
// itterate through array, fire newCard function
function showCards(array) {
  array.forEach(function(card) {
    createCard(card);
  })
}

// generate card
function createCard(card) {
  console.log(card);
    cardSection.insertAdjacentHTML('afterbegin',  `<article class="card" data-id="${card.id}">
      <header class="card__header" contenteditable="true">${card.title}</header>
      <img class="card__image" src="${card.file}">
      <figcaption class="card__image--caption" contenteditable="true">${card.caption}</figcaption>
      <footer class="card__footer">
        <img class="card__icons icons-delete" src="./assets/delete.svg" alt="delete">
        <img class="card__icons icons-favorite" src="${favoriteIconState(card.favorite)}"" alt="favorite">
      </footer>
    </article>`)
}

function favoriteIconState(favorite) {
  if (favorite) {
    return "./assets/favorite-active.svg"
  } else {
    return "./assets/favorite.svg"
  }
}


// new instance event.target.results
function objectCard(e) {
  // e.preventDefault();
  console.log('are we here?');
  var card = new Photo(Date.now(), inputTitle.value, inputCaption.value, event.target.result, false);
  cardsArr.push(card);
  card.saveToStorage(cardsArr);
  showCards(cardsArr);
}
