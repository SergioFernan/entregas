velas = [4, 1, 1, 2, 4]

function ninosCumple(lista) {
    let cuenta = 0;
    let numeroMaximo = 0;
    for (let i = 0; i < lista.length; i++) {
        const posicion = lista[i];
        if (posicion > numeroMaximo) {
            numeroMaximo = posicion
            cuenta = 1;
        }
        else if (posicion === numeroMaximo) {
            cuenta++;
        }

    }
    console.log(`el numero de ninos en soplar vela seran ${cuenta}, ellos cumpliran ${numeroMaximo} anos`)

}

ninosCumple(velas)