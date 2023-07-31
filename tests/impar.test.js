const impar= require('../funciones/impar')

test("el número sera impar" , () =>{
    expect(impar(7)).toBe(true)
})