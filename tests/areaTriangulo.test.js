const area= require('../funciones/areaTriangulo')

test('el area debera ser 20', () => {
    expect(area(5,4)).toBe(20)
})