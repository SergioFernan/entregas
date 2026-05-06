class Carro {

    constructor() {
        this.acelerar = 0;
        this.frenar = 0;
        this.velocidad = 0;
    }

    acelera(number) {
        if (number < 0) {
            console.log(`numero es invalido`)
        }
        else if (number === 0) {
            this.acelerar = 1;
            this.velocidad = this.acelerar - this.frenar;
        }
        else if (number > 0) {
            this.acelerar = number;
            this.velocidad = this.acelerar - this.frenar;
        }
    }
    frena(number) {
        if (number < 0) {
            console.log(`numero es invalido`)
        }
        else if (number === 0) {
            this.frenar = 1;
            this.velocidad = this.acelerar - this.frenar;
        }
        else if (number > 0) {
            this.frenar = number;
            this.velocidad = this.acelerar - this.frenar;
        }

    }

}


const auto = new Carro();
auto.acelera(20)
auto.frena(10)

console.log(auto.velocidad)