// Estrutura de repetição (For of)

const nome = ['Luiz', 'Gabriel', 'Lais'];

/*
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
*/

/*
for(let i in nome) {
    console.log(nome[i]);
}
*/


for(let valor of nome) {
    console.log(valor);
}


/*
nome.forEach(function(valor, indice) {
    console.log(valor, indice);
});
*/

// For clássico - Geralmente com iteráveis(array ou strings)
// For in - Retorna o índice ou chave(strings, arrays ou objetos)
//For of - Retorna o valor em si(iteráveis, arrays ou strings)

