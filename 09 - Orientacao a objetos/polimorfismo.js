class Funcionario {

    // Corpo da classe

    constructor() {

        // Corpo do método construtor
        this.nome = "";
        this.idade = 0;
        this.tempoCasa = 0;
        this.salario = 0;
        this.cargo = "";
        this.funcao = "";
        this.bonus = 0;
    }

    calculaBonus() {
        if (this.tempoCasa > 2) {
            let percentual = this.tempoCasa > 8 ? 8 : this.tempoCasa;
            this.bonus = this.salario * percentual / 100;
        }
    }
}

class Gerente extends Funcionario {

    calculaBonus() {
        if (this.tempoCasa > 1) {
            let percentual = this.tempoCasa > 8 ? 8 : this.tempoCasa;
            this.bonus = this.salario * percentual / 100;
        }
    }
}

let f1 = new Gerente();
f1.nome = "Maria";
f1.cargo = "Gerente de TI";
f1.tempoCasa = 2;
f1.salario = 19450.50;

let f2 = new Funcionario();
f2.nome = "João";
f2.cargo = "Programador Fullstack";
f2.tempoCasa = 9;
f2.salario = 7850.20;

let f3 = new Funcionario();
f3.nome = "Sandra";
f3.cargo = "UX Designer";
f3.tempoCasa = 5;
f3.salario = 5650.80;

f1.calculaBonus();
console.log(`${f1.nome} terá bônus de R$ ${f1.bonus}.`)

f2.calculaBonus();
console.log(`${f2.nome} terá bônus de R$ ${f2.bonus}.`)

f3.calculaBonus();
console.log(`${f3.nome} terá bônus de R$ ${f3.bonus}.`)