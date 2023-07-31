const positivo= require('../funciones/positivo')

test("el número es positivo", () => {
    expect(positivo(5)).toBe(true)
})