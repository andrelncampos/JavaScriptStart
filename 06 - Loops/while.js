// Atribuição de valores
let par = 0;
let impar = 1;
let i = 1;

// Processamento e exibição
while (i <= 10) {

    console.log(`Rodada: ${i},  Par: ${par},  Ímpar: ${impar}`);

    if (par === 10) {
        break;
    }

    par += 2;
    impar += 2;
    i++;

}