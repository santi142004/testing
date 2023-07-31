
const obtener = require('../funciones/obtener');

test('Retorna el saludo correctamente', () => {
  expect(obtener("pepe")).toBe('¡Hola, pepe!');
});

