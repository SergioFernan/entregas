class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

for (let i = 0; i < 3; i++) {
    let nuevaLista = []
    let nombre = prompt("digita tu nombre")
    let edad = prompt("digita tu edad")
    let genero = prompt("digita tu genero")
    let nuevaPersona = new Persona(nombre, edad, genero);
    nuevaLista.push(nuevaPersona);
    console.log(nuevaLista);
}
