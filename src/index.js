import Book from './app.js';

const newBook = new Book('auba', 'laca7tyuio');

document.getElementById('add').addEventListener('click', (e) => {
  console.log(newBook);

  e.preventDefault();
  Book.addauth();
  console.log('lala0 ');
});
