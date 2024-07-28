import Book from '../domain/Book';
import CartItem from '../CartItem';

test('should create a CartItem instance with correct properties', () => {
  const book = new Book(1, 'The Great Gatsby', 750, 180, 'F. Scott Fitzgerald');
  const cartItem = new CartItem(book, 2);

  expect(cartItem.item).toBe(book);
  expect(cartItem.quantity).toBe(2);
});

test('should increment the quantity of CartItem', () => {
  const book = new Book(1, 'The Great Gatsby', 750, 180, 'F. Scott Fitzgerald');
  const cartItem = new CartItem(book, 2);

  cartItem.incrementQuantity();
  expect(cartItem.quantity).toBe(3);
});

test('should decrement the quantity of CartItem', () => {
  const book = new Book(1, 'The Great Gatsby', 750, 180, 'F. Scott Fitzgerald');
  const cartItem = new CartItem(book, 2);

  cartItem.decrementQuantity();
  expect(cartItem.quantity).toBe(1);

  cartItem.decrementQuantity();
  expect(cartItem.quantity).toBe(1);
});
