console.log("")
console.log("Esse é o código do contadom.js")
console.log("------------------------------")

const elementos = [];

contaNodes(document);

elementos.forEach(function(e) { console.log(e); })

function contaNodes(node) {

    while (node !== undefined) {

        let pos = elementos.map((elem) => elem[0]).indexOf(node.nodeName);
        console.log(`Valor de pos: ${pos}`);

        if (pos < 0)
            elementos.push([node.nodeName, 1]);
        else
            elementos[pos][1] = elementos[pos][1] + 1;

        console.log(node.nodeName);

        if (node.hasChildNodes()) {
            for (let i = 0; i < node.children.length; i++)
                contaNodes(node.children[i]);
        }

        node = node.nextSibiling;
    }
    nivel--;
    return;
}