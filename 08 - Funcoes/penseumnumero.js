// Define um valor inteiro entre 0 e 100
n = Math.round(Math.random() * 100);

// Chama a função recursiva
acertaNumero(n, 64);

// Função recursiva
function acertaNumero(numero, chute) {

    console.log(`Preço: ${numero}, Chute: ${chute}`);

    // Se for igual, acertou
    if (chute === numero) {
        console.log("Acertou!!!")
        return;
    }
    // Se o chute foi foi alto, baixa
    else if (chute > numero) {
        chute -= 1;
        acertaNumero(numero, chute);
    }
    // Se o chute foi baixo, aumenta
    else {
        chute += 1;
        acertaNumero(numero, chute);
    }
}