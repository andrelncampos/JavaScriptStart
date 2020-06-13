// Criar Array original
let meuArray = [
    [5, 3000],
    [7, 4500],
    [2, 2000],
    [3, 2400],
    [6, 4100]
];
console.log(`Array original: [${meuArray}]`);

// Aplicar o map()
let meuNovoArray = meuArray.map(function(elemento) {
    return [elemento[0] * 2, elemento[1] * 2];
});
console.log(`Novo Array: [${meuNovoArray}]`);