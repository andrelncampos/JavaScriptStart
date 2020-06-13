primo(1, 10);
console.log("Programa encerrado");

// Função recursiva
function primo(numero, limite) {

    // Ponto de interrupção
    if (numero > limite) {
        return;
    }

    // Verifica se o numero é impar
    if (numero % 2 !== 0) {

        // Começa assumindo que o número é primo
        let ehPrimo = true;

        for (let n = numero - 1; n > 1; n--) {
            //console.log(`Numero: ${numero}. n: ${n}. Calculo: ${numero % n }`);
            if (numero % n == 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            console.log(`Primo: ${numero}`);
        }
    }
    numero++;
    primo(numero, limite);
}