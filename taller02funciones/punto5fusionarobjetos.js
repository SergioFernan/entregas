function fusionarObjetos(obj1, obj2) {
    let nuevoObjeto = { ...obj1, ...obj2 }
    return nuevoObjeto

}

let objeto1 = { a: 1, b: 2, c: 4 }
let objeto2 = { c: 9, b: 9, e: 4 }

console.log(fusionarObjetos(objeto1, objeto2))