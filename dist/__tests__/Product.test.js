"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../domain/Product"));
test('should create a Product instance with correct properties', () => {
    const product = new Product_1.default(1, 'Generic Product', 500);
    expect(product.id).toBe(1);
    expect(product.name).toBe('Generic Product');
    expect(product.price).toBe(500);
});
//# sourceMappingURL=Product.test.js.map