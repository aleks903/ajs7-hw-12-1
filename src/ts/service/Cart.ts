import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];
  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  amountPrice(percent: number = 1): number {
    return this._items.reduce((sum, current) => sum + (current.price * percent), 0);
  }

  delItem(id: number): void {
    const idDel = this._items.findIndex(item => item.id === id);
    if (idDel === -1) {
      throw new Error('Не найден элемен');
    }
    this._items.splice(idDel, 1);
  }
}
