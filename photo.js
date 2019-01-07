class Photo {
  constructor(id, title, caption, file, favorite){
		this.id = id;
		this.title = title;
		this.caption = caption;
		this.file = file;
    this.favorite = favorite;
  }
  saveToStorage(cardsArr) {
    console.log(this.file);
    // var cardData = {id: this.id, title: this.title, caption: this.caption, file: this.file, favorite: this.favorite};
    localStorage.setItem("cards", JSON.stringify(cardsArr));
  }
  deleteFromStorage() {

  }

  updateTitle() {

  }

  updatePhoto() {

  }

  updateCaption() {

  }

}
