let times = [];
times[0] = "São Paulo";
times[1] = "Corinthians";
times[2] = "Flamengo";
times[3] = "Fluminense";
times[4] = "Botafogo";
times[5] = "Vasco";
times[6] = "Palmeiras";
times[7] = "Santos";

for (let time of times) {
    console.log(`Conteúdo: ${time}`);
}

let i1 = times.indexOf("Internacional");
let i2 = times.indexOf("Fluminense");

console.log(`Internacional: ${i1}`);
console.log(`Internacional: ${i2}`);