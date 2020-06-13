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
        this.descontoIR = 0;
        this.descontoIRPerc = 0;
    }

    calculaBonus() {
        if (this.tempoCasa > 2) {
            let percentual = this.tempoCasa > 8 ? 8 : this.tempoCasa;
            this.bonus = this.salario * percentual / 100;
        }
    }

    mostraDescontoIR() {

        console.log(`Nome: ${this.nome}. Salário: R$ ${this.salario}.`);
        console.log(`Descontode IR: R$ ${this.descontoIR}. Alíquota: ${this.descontoIRPerc}`);
        console.log(`---------------------------------------`);
    }

    static calculaDescontIR(fun) {

        let desconto = 0;
        if (fun.salario > 1903 && fun.salario < 2827)
            desconto = 7.5;
        else if (fun.salario > 2826 && fun.salario < 3751.07)
            desconto = 15;
        else if (fun.salario > 3751.06 && fun.salario < 4664.70)
            desconto = 22.5;
        else if (fun.salario > 4664.69)
            desconto = 27.5;

        let valor = fun.salario * desconto / 100;
        fun.descontoIR = valor;
        fun.descontoIRPerc = desconto;
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

// Funcionária Carla
let carla = new Funcionario();
carla.nome = "Carla";
carla.cargo = "Estagiária Frontend";
carla.tempoCasa = 1;
carla.salario = 1000;
Funcionario.calculaDescontIR(carla);
carla.mostraDescontoIR();

// Funcionária Sandra
let sandra = new Funcionario();
sandra.nome = "Sandra";
sandra.cargo = "UX Designer";
sandra.tempoCasa = 5;
sandra.salario = 2000;
Funcionario.calculaDescontIR(sandra);
sandra.mostraDescontoIR();

// Funcionário João
let joao = new Funcionario();
joao.nome = "João";
joao.cargo = "Programador Fullstack Junior";
joao.tempoCasa = 9;
joao.salario = 3000;
Funcionario.calculaDescontIR(joao);
joao.mostraDescontoIR();

// Funcionário João
let luana = new Funcionario();
luana.nome = "Luana";
luana.cargo = "Programador Fullstack Pleno";
luana.tempoCasa = 9;
luana.salario = 4000;
Funcionario.calculaDescontIR(luana);
luana.mostraDescontoIR();

// Funcionária Maria
let maria = new Gerente();
maria.nome = "Maria";
maria.cargo = "Gerente de TI";
maria.tempoCasa = 2;
maria.salario = 5000;
Funcionario.calculaDescontIR(maria);
maria.mostraDescontoIR();