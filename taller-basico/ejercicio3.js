let array = [1, 4, 3, 5, 8, 23, 45, 67, 89, 102];

function invertirArray(lista) {
    let invertido = [];
    for (let i = 0; i < lista.length; i++) {
        const posicion = lista[i];
        invertido.unshift(posicion)
    }
    console.log(invertido)
}
console.log(array)
invertirArray(array)