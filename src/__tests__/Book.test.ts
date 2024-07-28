import Book from '../domain/Book';

test('should create a Book instance with correct properties', () => {
  const book = new Book(1, 'The Great Gatsby', 750, 180, 'F. Scott Fitzgerald');

  expect(book.id).toBe(1);
  expect(book.name).toBe('The Great Gatsby');
  expect(book.price).toBe(750);
  expect(book.pages).toBe(180);
  expect(book.author).toBe('F. Scott Fitzgerald');
});
