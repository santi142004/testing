const resta = require('../funciones/resta');

test('resta 5 - 3 es igual a 2 ', () => {
  expect (resta(5,3)) .toBe(2);
})