const cuadrado = require('../funciones/cuadrado');

test('cuadrado de  2 es igual a 4 ', () => {
  expect (cuadrado(2)) .toBe(4);
})