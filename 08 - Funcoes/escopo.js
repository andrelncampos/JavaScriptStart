toNaArea("JavaScript", "Start");

console.log(`Estou na área principal`);
console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}`);

function toNaArea(nome, sobrenome) {
    let tamanhoNome = nome.length;
    let tamanhoSobrenome = sobrenome.length;
    console.log(`Estou dentro da função toNaArea`);
    console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}`);
    console.log(`Tamanho nome: ${tamanhoNome}, Tamanho sobrenome: ${tamanhoSobrenome}`);
    toNaSubArea(“oi”);
}

function toNaSubArea(mensagem) {
    console.log(`Estou dentro da função toNaSubArea`);
    console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}`);
}