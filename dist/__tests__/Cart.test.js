"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("../Cart"));
const Book_1 = __importDefault(require("../domain/Book"));
const Movie_1 = __importDefault(require("../domain/Movie"));
const Gadget_1 = __importDefault(require("../domain/Gadget"));
test('should add items to cart and calculate total sum', () => {
    const cart = new Cart_1.default();
    const book = new Book_1.default(1, 'Book Name', 100, 200, 'Author');
    const movie = new Movie_1.default(2, 'Movie Name', 150, 2010, 'USA', 'Slogan', 'Genre', '2 hours');
    const gadget = new Gadget_1.default(3, 'Gadget Name', 200, 'Model', 'Manufacturer');
    cart.add(book);
    cart.add(movie);
    cart.add(gadget);
    expect(cart.items.length).toBe(3);
    expect(cart.totalSum()).toBe(450);
});
test('should remove item by id', () => {
    const cart = new Cart_1.default();
    const book = new Book_1.default(1, 'Book Name', 100, 200, 'Author');
    const movie = new Movie_1.default(2, 'Movie Name', 150, 2010, 'USA', 'Slogan', 'Genre', '2 hours');
    cart.add(book);
    cart.add(movie);
    cart.removeById(1);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(movie);
});
test('should calculate total sum with discount', () => {
    const cart = new Cart_1.default();
    const book = new Book_1.default(1, 'Book Name', 100, 200, 'Author');
    const movie = new Movie_1.default(2, 'Movie Name', 150, 2010, 'USA', 'Slogan', 'Genre', '2 hours');
    cart.add(book);
    cart.add(movie);
    expect(cart.totalSumWithDiscount(10)).toBe(225);
});
//# sourceMappingURL=Cart.test.js.map