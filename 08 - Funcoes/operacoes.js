// Valores de entrada
let num1 = 6;
let num2 = 4;

// Exibindo valores de entrada
console.log(`Primeiro valor: ${num1} e segundo valor: ${num2}`)
console.log("---------------------------------------");

// Realizando cálculos e apresentando resultados
console.log(`Soma.........: ${soma(num1,num2)}`);
console.log(`Subtração....: ${subtrai(num1,num2)}`);
console.log(`Divisão......: ${divide(num1,num2)}`);
console.log(`Multiplicação: ${multiplica(num1,num2)}`);
console.log(`Exponenciação: ${exponencia(num1,num2)}`);

// Função para somar
function soma(a, b) {
    return a + b;
}

// Função para subtrair
function subtrai(a, b) {
    return a - b;
}

// Função para dividir
function divide(a, b) {
    return a / b;
}

// Função para multiplicar
function multiplica(a, b) {
    return a * b;
}

// Função para exponenciar
function exponencia(a, b) {
    return a ** b;
}