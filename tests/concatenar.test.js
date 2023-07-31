const concat= require('../funciones/concatenar')

test("concatena strings", () =>{
    expect(concat("hola,", " como estas")).toBe("hola, como estas")
})