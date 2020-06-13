let string1 = "Eu canto porque o instante existe e a minha vida está completa.";
let string2 = "Não sou alegre nem sou triste: sou poeta.";
console.log(`String 1: ${string1}`);
console.log(`String 2: ${string2}`);

let array1 = string1.split(" ");
console.log(`Array 1: ${array1}`);

let array2 = string2.split(" ");
console.log(`Array 2: ${array2}`);

let array3 = array1.concat(array2);
console.log(`Array 3: ${array3}`);

let string3 = array3.join(" ");
console.log(`String 3: ${string3}`);