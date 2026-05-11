function mostrarDominio(mail) {
    let dominio = [];
    let empezoDominio = false;
    for (let i = 0; i < mail.length; i++) {
        const letra = mail[i];
        if (empezoDominio) {
            dominio.push(letra)
        }
        else if (letra === `@`) {
            empezoDominio = true;
        }
    }
    return dominio.join(``)
}

console.log(mostrarDominio(`marcela@outlook.com`))