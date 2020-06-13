class Naipe {

    constructor(naipe) {
        this.naipeNome = naipe;
        this.cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    }
}

class Baralho {

    constructor() {
        this.espadas = new Naipe("Espadas");
        this.ouros = new Naipe("Ouros");
        this.paus = new Naipe("Paus");
        this.copas = new Naipe("Copas");
    }

    mostraBaralho() {
        this.mostra(this.espadas);
        this.mostra(this.ouros);
        this.mostra(this.paus);
        this.mostra(this.copas);
        this.naipe = "";
        this.carta = "";
    }

    mostra(naipe) {
        for (let carta of naipe.cartas) {
            console.log(`Carta: ${carta} de ${naipe.naipeNome}`);
        }
    }

    cartaAleatoria() {
        let n = Math.round(Math.random() * 3) + 1;
        let naipe = this.espadas;
        switch (n) {
            case 1:
                naipe = this.ouros;
                break;
            case 2:
                naipe = this.paus;
                break;
            case 3:
                naipe = this.copas
                break;
        }
        let c = Math.round(Math.random() * 13);
        let carta = naipe.cartas[c];
        this.naipe = naipe.naipeNome;
        this.carta = carta;
    }

}

class Aposta {
    constructor(carta, naipe) {
        let baralho = new Baralho();
        baralho.cartaAleatoria();
        if (carta === baralho.carta && naipe === baralho.naipe)
            console.log("Acertou em cheio! Incrível!");
        else {
            console.log(`Continue tentando, a carta foi ${baralho.carta} de ${baralho.naipe}`);
            console.log(`Mas, você escolheu ${carta} de ${naipe}`);
        }
    }
}

let a = new Aposta(4, "Ouros");