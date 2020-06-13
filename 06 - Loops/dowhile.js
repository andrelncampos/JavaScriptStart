// Atribuição de valores
let flamengo = 0;
let fluminense = 0;
let campeonatoRodada = 1;

// Processamento e exibição
do {

    const maximoGols = Math.round(Math.random() * 8);
    const flamengoGols = Math.round(Math.random() * maximoGols);
    const fluminenseGols = Math.round(Math.random() * maximoGols);

    if (flamengoGols > fluminenseGols) {
        flamengo += 3;
    } else if (fluminenseGols > flamengoGols) {
        fluminense += 3;
    } else {
        flamengo++;
        fluminense++;
    }

    console.log(`Rodada: ${campeonatoRodada}, Placar: Flamengo ${flamengoGols} x Fluminense ${fluminenseGols}.`);

    campeonatoRodada++;

} while (campeonatoRodada <= 10) // Campeonato de 10 rodadas

console.log(`Pontos: Flamengo ${flamengo} x Fluminense ${fluminense}.`);