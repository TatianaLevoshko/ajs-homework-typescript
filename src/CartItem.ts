import Buyable from './Buyable';

export default class CartItem {
  constructor(
    public item: Buyable,
    public quantity: number = 1
  ) {}

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
