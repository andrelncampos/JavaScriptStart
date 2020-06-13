const funcionarios = [
    ["Bethânia", 5, 3000],
    ["Roberto", 7, 4500],
    ["Gilberto", 2, 2000],
    ["Caetano", 3, 2400],
    ["Elis", 6, 4100]
];

console.log(``);
console.log(`funcionarios`);
console.log(`------------------`);
console.log(funcionarios);

const novatos = funcionarios.filter(function(elemento) {
    return elemento[1] <= 3;
})

console.log(``);
console.log(`Novatos`);
console.log(`------------------`);
console.log(novatos);