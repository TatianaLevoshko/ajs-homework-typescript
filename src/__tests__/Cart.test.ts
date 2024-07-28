import Cart from '../Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import Gadget from '../domain/Gadget';

test('should add items to cart and calculate total sum', () => {
  const cart = new Cart();
  const book = new Book(1, 'Book Name', 100, 200, 'Author');
  const movie = new Movie(2, 'Movie Name', 150, 2010, 'USA', 'Slogan', 'Genre', '2 hours');
  const gadget = new Gadget(3, 'Gadget Name', 200, 'Model', 'Manufacturer');

  cart.add(book);
  cart.add(movie);
  cart.add(gadget);

  expect(cart.items.length).toBe(3);
  expect(cart.totalSum()).toBe(450);
});

test('should remove item by id', () => {
  const cart = new Cart();
  const book = new Book(1, 'Book Name', 100, 200, 'Author');
  const movie = new Movie(2, 'Movie Name', 150, 2010, 'USA', 'Slogan', 'Genre', '2 hours');

  cart.add(book);
  cart.add(movie);
  cart.removeById(1);

  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toBe(movie);
});

test('should calculate total sum with discount', () => {
  const cart = new Cart();
  const book = new Book(1, 'Book Name', 100, 200, 'Author');
  const movie = new Movie(2, 'Movie Name', 150, 2010, 'USA', 'Slogan', 'Genre', '2 hours');

  cart.add(book);
  cart.add(movie);

  expect(cart.totalSumWithDiscount(10)).toBe(225);
});
