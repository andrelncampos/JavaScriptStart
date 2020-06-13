const texto = "JavaScript Start, primeira edição, de André Campos";

cripto = criptografa(texto);
console.log(`Texto criptografado: ${cripto}`);

descripto = descriptografa(cripto);
console.log(`Texto descriptografado: ${descripto}`);

function criptografa(s) {
    let c1 = inverte(s);
    let c2 = adicionaLixo(c1);
    return c2;
}

function descriptografa(s) {
    let d1 = tiraLixo(s);
    let d2 = inverte(d1);
    return d2;
}

function inverte(s) {
    let ret = "";
    for (c of s) {
        ret = c + ret;
    }
    return ret;
}

function adicionaLixo(s) {

    let ret = "";
    let lixo = ["#", "$", "%", "*", "@", "&", "'", "!", "+", ")"];
    let ponteiro = 0;

    for (c of s) {
        ret += c + lixo[ponteiro];
        ponteiro++;
        if (ponteiro > 9) ponteiro = 0;
    }

    return ret;
}

function tiraLixo(s) {
    let ret = "";
    for (let i = 0; i < s.length; i += 2) {
        ret += s[i];
    }
    return ret;
}