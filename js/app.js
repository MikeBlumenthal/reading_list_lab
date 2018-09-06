document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);
  const dButton = document.querySelector('#delete-all');
  dButton.addEventListener('submit', deleteAll);
})

const handleForm = function(event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const newBook = document.createElement('p');
  newBook.textContent = `Title: ${title} \r\nAuthor: ${author} \r\nCategory: ${category}`;
  newBook.classList.add('bookItem')
  const info = document.querySelector('#reading-list');
  info.appendChild(newBook);
  this.reset();
}

const deleteAll = function() {
  const allElements = document.querySelectorAll('.bookItem')
  while(allElements.firstChild){
    allElements.removeChild(allElements.firstChild);
  }
}
