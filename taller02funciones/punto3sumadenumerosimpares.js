function sumaImpares(array) {
    let lista = [];
    for (let i = 0; i < array.length; i++) {
        const numero = array[i];
        if (numero % 2 !== 0) {
            lista.push(numero)
        }

    }
    return `la lista de numeros impares es ${lista} y su suma es igual a ${suma(lista)}`

}

function suma(array) {
    let sumaNums = 0;
    for (let i = 0; i < array.length; i++) {
        const numeros = array[i];
        sumaNums = sumaNums + numeros
    }
    return sumaNums
}

console.log(sumaImpares([1, 2, 3]))