// Times para o campenato
let timesRJ = [
    ["Fluminense", 0],
    ["Flamengo", 0],
    ["Botafogo", 0],
    ["Vasco", 0]
];

// Campeonato Carioca
let totalTimesRJ = timesRJ.length;

for (let anfitriao = 0; anfitriao < totalTimesRJ; anfitriao++) {
    for (let convidado = 0; convidado < totalTimesRJ; convidado++) {

        // Realiza jogo se anfiriao e convidado forem diferentes
        if (anfitriao !== convidado) {
            let limiteGols = Math.round(Math.random() * 6);
            let golsAnfitriao = Math.round(Math.random() * limiteGols);
            let golsConvidado = Math.round(Math.random() * limiteGols);
            let time1 = `${timesRJ[anfitriao][0]}`;
            let time2 = `${timesRJ[convidado][0]}`;

            console.log(`JOGO: ${time1} ${golsAnfitriao} X ${golsConvidado} ${time2}`)

            // Atribui pontuação para os times
            if (golsAnfitriao > golsConvidado) {
                timesRJ[anfitriao][1] += 3;
            } else if (golsConvidado > golsAnfitriao) {
                timesRJ[convidado][1] += 3;
            } else {
                timesRJ[anfitriao][1] += 1;
                timesRJ[convidado][1] += 1;
            }
        }
    }
}

// Ordena por número de pontos
timesRJ.sort((a, b) => a[1] - b[1]);

// Exibe a tabela do campeonato
console.log(timesRJ);

// Exibe o campeão
let campeaoNome = `${timesRJ[totalTimesRJ-1][0]}`;
let campeaoPontos = `${timesRJ[totalTimesRJ-1][1]}`;
console.log(`O campeão foi o ${campeaoNome} com ${campeaoPontos} pontos.`);