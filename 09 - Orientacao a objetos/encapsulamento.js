class Cliente {

    constructor() {
        this._nome = "";
        this._pontos = 0;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get pontos() { return this._pontos; }
}

let c = new Cliente();
c._nome = "Maria";
c._pontos = 10;

console.log(`Nome: ${c._nome}`);
console.log(`Pontos: ${c._pontos}`);