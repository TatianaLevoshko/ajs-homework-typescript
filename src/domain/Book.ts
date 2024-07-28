import Buyable from './Buyable';

export default class Book implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly prise: number,
    readonly pages: number,
    readonly author: string
  ) {}
}
