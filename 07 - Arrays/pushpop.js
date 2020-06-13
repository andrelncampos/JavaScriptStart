let times = [];
times[0] = "São Paulo";
times[1] = "Corinthians";
times[2] = "Flamengo";
times[3] = "Fluminense";
times[4] = "Botafogo";
times[5] = "Vasco";
times[6] = "Palmeiras";
times[7] = "Santos";
console.log(`Lista inicial: ${times}`);

times.push("Gremio");
times.push("Cruzeiro");
console.log(`Adicionado Grêmio e Cruzeiro: ${times}`);

times.pop();
console.log(`Removido o último do Array: ${times}`);