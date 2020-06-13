const meuBory = document.querySelector("body");
const paiDoBody = meuBory.parentNode;
const primeirFilho = meuBory.firstChild;
const ultimoFilho = meuBory.lastChild;
console.log(`Tag selecionada: ${meuBory.tagName}, tipo: ${meuBory.nodeType}`);
console.log(`Pai da tag: ${paiDoBody.tagName}, tipo: ${paiDoBody.nodeType}`);
console.log(`Primeiro filho: ${primeirFilho.tagName}, tipo: ${primeirFilho.nodeType}`);
console.log(`Último filho: ${ultimoFilho.tagName}, tipo: ${ultimoFilho.nodeType}`);