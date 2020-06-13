// Atribuição de valores
let resultado = Math.round(Math.random() * 10);

// Processoamento
switch (resultado) {
    case 1:
        resposta = "Absolutamente não";
        break;
    case 2:
        resposta = "Quase certeza que não";
        break;
    case 3:
        resposta = "Acho que não";
        break;
    case 4:
        resposta = "Mais pra não do que pra sim";
        break;
    case 5:
        resposta = "Talvez";
        break;
    case 6:
        resposta = "Mais pra sim do que pra não";
        break;
    case 7:
        resposta = "Acho que sim";
        break;
    case 8:
        resposta = "Quase certeza que sim";
        break;
    case 9:
        resposta = "Absolutamente sim";
        break;
    case 10:
        resposta = "Sim, com provas forenses incontestáveis";
        break;
    default:
        resposta = "Preciso pensar melhor. Rode o programa novamente.";
}

// Exibição dos resultados
console.log(`Resultado do cálculo: ${resultado}`);
console.log(`Resposta para a sua pergunta: ${resposta}.`);