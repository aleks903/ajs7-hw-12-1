import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('новая пустая корзина', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('добавление в корзину', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1001,
    'Мстители',
    100,
    2012,
    'США',
    'Avengers Assemble!',
    [
      'фантастика',
      'боевик',
      'фэнтези',
      'приключения',
    ],
    '137 мин. / 02:17',
  ));
  const expected = [{
    id: 1001,
    name: 'Мстители',
    price: 100,
    year: 2012,
    country: 'США',
    tagline: 'Avengers Assemble!',
    genre: [
      'фантастика',
      'боевик',
      'фэнтези',
      'приключения',
    ],
    timers: '137 мин. / 02:17',
}];

  expect(cart.items).toEqual(expected);
});

test('суммарная стоимость (без учёта скидки) и со скидкой 50%', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1001,
    'Мстители',
    100,
    2012,
    'США',
    'Avengers Assemble!',
    [
      'фантастика',
      'боевик',
      'фэнтези',
      'приключения',
    ],
    '137 мин. / 02:17',
  ));
  cart.add(new Movie(
    1002,
    'Мстители: Эра Альтрона',
    105,
    2015,
    'США',
    'A new age begins',
    [
      'фантастика',
      'боевик',
      'приключения',
    ],
    '141 мин. / 02:21',
  ));
  cart.add(new Movie(
    1003,
    'Мстители: Финал',
    95,
    2019,
    'США',
    'Avenge the fallen',
    [
      'фантастика',
      'боевик',
      'драма',
      'приключения',
    ],
    '181 мин. / 03:01',
  ));

  expect(cart.amountPrice()).toBe(300);
  expect(cart.amountPrice(0.5)).toBe(150);
});

test('удаление уже добавленный в корзину объект', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1001,
    'Мстители',
    100,
    2012,
    'США',
    'Avengers Assemble!',
    [
      'фантастика',
      'боевик',
      'фэнтези',
      'приключения',
    ],
    '137 мин. / 02:17',
  ));
  cart.add(new Movie(
    1002,
    'Мстители: Эра Альтрона',
    105,
    2015,
    'США',
    'A new age begins',
    [
      'фантастика',
      'боевик',
      'приключения',
    ],
    '141 мин. / 02:21',
  ));
  cart.add(new Movie(
    1003,
    'Мстители: Финал',
    95,
    2019,
    'США',
    'Avenge the fallen',
    [
      'фантастика',
      'боевик',
      'драма',
      'приключения',
    ],
    '181 мин. / 03:01',
  ));
  cart.delItem(1002);
  expect(cart.items.length).toBe(2);
});

test('удаление уже не существующего', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1001,
    'Мстители',
    100,
    2012,
    'США',
    'Avengers Assemble!',
    [
      'фантастика',
      'боевик',
      'фэнтези',
      'приключения',
    ],
    '137 мин. / 02:17',
  ));
  cart.add(new Movie(
    1002,
    'Мстители: Эра Альтрона',
    105,
    2015,
    'США',
    'A new age begins',
    [
      'фантастика',
      'боевик',
      'приключения',
    ],
    '141 мин. / 02:21',
  ));
  cart.add(new Movie(
    1003,
    'Мстители: Финал',
    95,
    2019,
    'США',
    'Avenge the fallen',
    [
      'фантастика',
      'боевик',
      'драма',
      'приключения',
    ],
    '181 мин. / 03:01',
  ));
   expect(() => {
    cart.delItem(1005);
   }).toThrow();
});