// Atribuição de valores
let resultado = Math.random();
let resposta = "Absolutamente sim";

// Processamento
if (resultado <= 0.2) {
    resposta = "Absolutamente não";
} else if (resultado > 0.2 && resultado <= 0.4) {
    resposta = "Quase certeza que não";
} else if (resultado > 0.4 && resultado <= 0.6) {
    resposta = "Talvez sim, talvez não";
} else if (resultado > 0.6 && resultado <= 0.8) {
    resposta = "Quase certeza que sim";
}

// Exibição dos resultados
console.log(`Sua resposta: ${resposta}.`)