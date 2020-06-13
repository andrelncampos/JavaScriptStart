// Criar um Array com valores aleatorios
let meuArray = [];
for (let i = 0; i < 10; i++) {
    let valor1 = Math.round(Math.random() * 10 * i);
    let valor2 = Math.round(Math.random() * 10 * i);
    meuArray.push([valor1, valor2]);
}

// Ordenar o Array
meuArray.sort();

// Exibir os dados do Array
meuArray.forEach((elemento, indice) => {
    console.log(`Este é o elemento: ${elemento} que está no índice: ${indice}`);
});