const string = require('../funciones/string');

test('debera contener una a', () => {
  expect (string("hola")).toBe(true);
})