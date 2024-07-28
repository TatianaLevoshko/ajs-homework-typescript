"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../domain/Book"));
const CartItem_1 = __importDefault(require("../domain/CartItem"));
test('should create a CartItem instance with correct properties', () => {
    const book = new Book_1.default(1, 'The Great Gatsby', 750, 180, 'F. Scott Fitzgerald');
    const cartItem = new CartItem_1.default(book, 2);
    expect(cartItem.item).toBe(book);
    expect(cartItem.quantity).toBe(2);
});
test('should increment the quantity of CartItem', () => {
    const book = new Book_1.default(1, 'The Great Gatsby', 750, 180, 'F. Scott Fitzgerald');
    const cartItem = new CartItem_1.default(book, 2);
    cartItem.incrementQuantity();
    expect(cartItem.quantity).toBe(3);
});
test('should decrement the quantity of CartItem', () => {
    const book = new Book_1.default(1, 'The Great Gatsby', 750, 180, 'F. Scott Fitzgerald');
    const cartItem = new CartItem_1.default(book, 2);
    cartItem.decrementQuantity();
    expect(cartItem.quantity).toBe(1);
    cartItem.decrementQuantity();
    expect(cartItem.quantity).toBe(1);
});
//# sourceMappingURL=CartItem.test.js.map