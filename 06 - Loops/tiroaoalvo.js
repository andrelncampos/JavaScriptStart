const numeroTiros = 10
let somatorio = 0;
let i;
let pontos;

for (i = 1; i <= numeroTiros; i++) {

    const tiro = Math.round(Math.random() * 5);

    switch (tiro) {
        case 1:
            pontos = 1000;
            msg = "Parabéns, acertou em cheio!"
            break;
        case 2:
            pontos = 500;
            msg = "Parabéns, quase no alvo!"
            break;
        case 3:
            pontos = 250;
            msg = "Não tá mal não."
            break;
        case 4:
            pontos = 100;
            msg = "Ok, pode melhorar."
            break;
        case 5:
            pontos = 50;
            msg = "Treine mais, tá meio caído."
            break;
        default:
            pontos = 0;
            msg = "Acertou a parede. Pior não fica.";
            break;
    }

    somatorio += pontos;
    console.log(`Tentativa: ${i}. Alvo: ${tiro}. Pontos ${pontos}. ${msg}`);

}

console.log(`Seu total de pontos foi ${somatorio}`);