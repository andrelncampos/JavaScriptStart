// Criar Array original
let funcionarios = [
    ["Bethânia", 5, 3000],
    ["Roberto", 7, 4500],
    ["Gilberto", 2, 2000],
    ["Caetano", 3, 2400],
    ["Elis", 6, 4100]
];

// Título para os dados originais
console.log(``);
console.log(`Salários originais`);
console.log(`------------------`);

// Exibir os dados originais
funcionarios.forEach(e => {
    console.log(`Nome: ${e[0]} - Anos: ${e[1]} - Salário ${e[2]}`);
});

// Aplicar o map()
let funcionariosNovo = funcionarios.map(function(elemento) {
    let anos = elemento[1];
    let aumento = 1;
    switch (anos) {
        case 1:
            aumento = 1;
            break;
        case 2:
            aumento = 1;
            break;
        case 3:
            aumento = 1.05;
            break;
        case 4:
            aumento = 1.10;
            break;
        case 5:
            aumento = 1.15;
            break;
        case 6:
            aumento = 1.20;
            break;
        case 7:
            aumento = 1.25;
            break;
        default:
            aumento = 1.30;
            break;
    }

    let novoSalario = Math.round(elemento[2] * aumento);
    return [elemento[0], elemento[1], novoSalario];
});

// Ordenear a nova lista por salário, crescente
funcionariosNovo.sort(function(a, b) { return a[2] - b[2] });

// Título para os dados novos
console.log(``);
console.log(`Salários ajustados`);
console.log(`------------------`);

// Exibir os dados novos
funcionariosNovo.forEach(e => {
    console.log(`Nome: ${e[0]} - Anos: ${e[1]} - Salário ${e[2]}`);
});