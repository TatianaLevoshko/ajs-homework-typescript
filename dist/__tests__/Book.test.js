"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../domain/Book"));
test('should create a Book instance with correct properties', () => {
    const book = new Book_1.default(1, 'The Great Gatsby', 750, 180, 'F. Scott Fitzgerald');
    expect(book.id).toBe(1);
    expect(book.name).toBe('The Great Gatsby');
    expect(book.prise).toBe(750);
    expect(book.pages).toBe(180);
    expect(book.author).toBe('F. Scott Fitzgerald');
});
//# sourceMappingURL=Book.test.js.map