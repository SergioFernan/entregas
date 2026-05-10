function contarVocales(frase) {
    let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 }
    const fraseMinuscula = frase.toLowerCase()
    for (let i = 0; i < fraseMinuscula.length; i++) {
        const letra = fraseMinuscula[i];
        switch (letra) {
            case `a`:
                vocales.a = vocales.a + 1;
                break;
            case `e`:
                vocales.e = vocales.e + 1;
                break;
            case `i`:
                vocales.i = vocales.i + 1;
                break;
            case `o`:
                vocales.o = vocales.o + 1;
                break;
            case `u`:
                vocales.u = vocales.u + 1;
                break;
        }
    }
    console.log(vocales);


}

contarVocales(`PeRRos dE ColOrES aMarIllOs`)