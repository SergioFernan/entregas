let array = [1, 2, 3, 4, 5, 6, 8, 9, 10];

function numeroMayor(lista) {
    let mayor = 0;
    for (let i = 0; i < lista.length; i++) {
        const posicion = lista[i];
        if (mayor < posicion) {
            mayor = posicion;
        }
    }
    console.log(`el mayor es ${mayor}`);
}

numeroMayor(array);