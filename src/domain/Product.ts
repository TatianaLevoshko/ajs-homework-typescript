import Buyable from './Buyable';

export default class Product implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly prise: number
  ) {}
}
