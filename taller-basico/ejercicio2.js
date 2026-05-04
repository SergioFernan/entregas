let array = [1, 2, 4, 6, 7, 9, 12, 13, 14, 16, 18, 20];

function contarPares(lista) {
    let par = []
    let impar = []
    for (let i = 0; i < lista.length; i++) {
        const posicion = lista[i];
        if (posicion % 2 === 0) {
            par.push(posicion)
        }
        else {
            impar.push(posicion)
        }

    }
    console.log(`los impares son ${impar} y los pares son ${par}`)
}

contarPares(array)