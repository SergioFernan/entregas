let array = [1, 2, 3];

function sumaArray(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        const posicion = lista[i];
        suma += posicion;
    }
    console.log(`la suma es ${suma}`)
}

sumaArray(array);