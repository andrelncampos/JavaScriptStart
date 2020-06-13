console.log("")
console.log("Esse é o código do buscadom.js")
console.log("------------------------------")

let nivel = 0;
mostraNodes(document);

function mostraNodes(node) {

    nivel++;

    while (node !== undefined) {

        const identacao = "".padStart(nivel, "-");
        console.log(identacao + " " + node.nodeName);

        if (node.hasChildNodes()) {
            for (let i = 0; i < node.children.length; i++)
                mostraNodes(node.children[i]);
        }

        node = node.nextSibiling;

    }
    nivel--;
    return;
}