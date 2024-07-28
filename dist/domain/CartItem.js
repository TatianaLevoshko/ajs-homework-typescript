"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartItem {
    constructor(item, quantity = 1) {
        this.item = item;
        this.quantity = quantity;
    }
    incrementQuantity() {
        this.quantity++;
    }
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
}
exports.default = CartItem;
//# sourceMappingURL=CartItem.js.map