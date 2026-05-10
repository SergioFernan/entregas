function paresEnRango(inicio, final) {
    let pares = [];
    if (inicio < final) {
        for (let i = inicio; i < final + 1; i++) {
            const numero = i;
            if (i % 2 === 0) {
                pares.push(numero)
            }
        }
        return pares

    }
    else if (inicio > final) {
        return `el numero inicial no puede ser mayor al final, asi no se puede calcuylar el par`
    }
    else if (inicio === final) {
        let lista = [];
        if (inicio % 2 === 0) {
            lista.push(inicio)
            return lista
        }
        else {
            return `no hay pares`
        }
    }

}

console.log(paresEnRango(5, 5))


