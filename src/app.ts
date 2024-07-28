import Cart from './Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import Gadget from './domain/Gadget';

const cart = new Cart();

cart.add(new Book(1, 'The Great Gatsby', 750, 1000, 'F. Scott Fitzgerald'));
cart.add(new Movie(2, 'Avengers', 1500, 2012, 'USA', 'Avengers, assemble!', 'sci-fi, action, fantasy, adventure', '137 мин. / 02:17'));
cart.add(new Gadget(3, 'iPhone', 1000, 'iPhone 12', 'Apple'));

console.log(cart.items);
console.log('Total Sum:', cart.totalSum());
console.log('Total Sum with 10% discount:', cart.totalSumWithDiscount(10));

cart.removeById(1);
console.log(cart.items);
