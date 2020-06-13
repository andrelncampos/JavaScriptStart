class Dado {

    constructor() {
        this._face = 0;
    }

    get face() { return this._face; }
    set face(valor) { this._face = valor; }

    jogar() {
        this.face = Math.round(Math.random() * 5) + 1;
        console.log(`Face para cima: ${this.face}`);
    }
}

class Aposta {

    constructor(numero) {

        // Jogo dois dados
        let d1 = new Dado();
        d1.jogar();
        let d2 = new Dado();
        d2.jogar();

        // Resultado e soma das duas faces
        this.resultado = d1.face + d2.face;

        // Feedback pro jogador
        if (this.resultado === numero)
            console.log(`Parabéns, você apostou em ${numero} e o resultado foi esse!`);
        else
            console.log(`Pena, você apostou em ${numero} e o resultado foi ${this.resultado}`);
    }
}

// Que os dados rolem
let aposta = new Aposta(7);