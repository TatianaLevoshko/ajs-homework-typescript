"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    get items() {
        return [...this._items];
    }
    totalSum() {
        return this._items.reduce((sum, item) => { var _a; return sum + ((_a = item.prise) !== null && _a !== void 0 ? _a : 0); }, 0);
    }
    totalSumWithDiscount(discount) {
        return this.totalSum() * ((100 - discount) / 100);
    }
    removeById(id) {
        this._items = this._items.filter(item => item.id !== id);
    }
}
exports.default = Cart;
//# sourceMappingURL=Cart.js.map