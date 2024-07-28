"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("./Cart"));
const Book_1 = __importDefault(require("./domain/Book"));
const Movie_1 = __importDefault(require("./domain/Movie"));
const Gadget_1 = __importDefault(require("./domain/Gadget"));
const cart = new Cart_1.default();
cart.add(new Book_1.default(1, 'The Great Gatsby', 750, 1000, 'F. Scott Fitzgerald'));
cart.add(new Movie_1.default(2, 'Avengers', 1500, 2012, 'USA', 'Avengers, assemble!', 'sci-fi, action, fantasy, adventure', '137 мин. / 02:17'));
cart.add(new Gadget_1.default(3, 'iPhone', 1000, 'iPhone 12', 'Apple'));
console.log(cart.items);
console.log('Total Sum:', cart.totalSum());
console.log('Total Sum with 10% discount:', cart.totalSumWithDiscount(10));
cart.removeById(1);
console.log(cart.items);
//# sourceMappingURL=app.js.map