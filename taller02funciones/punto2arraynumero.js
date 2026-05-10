function palabrasLargas(array, numero) {
    nuevaLista = [];
    for (let i = 0; i < array.length; i++) {
        const posicion = array[i];
        if (posicion.length >= numero) {
            nuevaLista.push(posicion)
        }
    }
    return `los elementos de la lista cuyo numero de caracteres son mayores o iguales a ${numero} son ${nuevaLista}`
}


console.log(palabrasLargas(["perro", "gato", "elefante", "leon", "tigre", "hipopotamo", "pinguino", "jirafa"], 6))