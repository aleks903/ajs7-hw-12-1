import Cart from './service/Cart';
import Movie from './domain/Movie';

const cart = new Cart;
console.log(cart.items);

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

console.log(cart.items);
console.log('Skidka net');
console.log(cart.amountPrice());
console.log('Skidka 50%');
console.log(cart.amountPrice(0.5));
console.log('Delete id 1002');
console.log(cart.delItem(1005));
console.log('**********************');
console.log(cart.items);