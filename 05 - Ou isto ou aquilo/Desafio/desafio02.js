// Etrada
let seuNome = "Cora"; // Altere aqui para o seu nome
let seuNumero = 5; // Altere aqui valor para o resultado que espera

// Processamento
let dado1 = Math.round(Math.random() * 5 + 1);
let dado2 = Math.round(Math.random() * 5 + 1);
let resultado = dado1 + dado2;

// Saída
console.log(`Resultado do primeiro dado: ${dado1}.`)
console.log(`Resultado do segundo dado: ${dado2}.`)
console.log(`Resultado final: ${resultado}.`)
console.log(`Número que você escolheu: ${seuNumero}.`)

if (resultado === seuNumero) {
    console.log(`Parabéns ${seuNome}, acertou em cheio!`);
} else {
    console.log(`Poxa ${seuNome}, desiste não. Altera o número lá e tenta de novo.`);
}