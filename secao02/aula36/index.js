// For in - Estrutura de repetição

const frutas = ['Pêra', 'Maçã', 'Uva'];
/*
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
*/

//A estrutura (For in) lê os índices 
/*
for(let i in frutas) {
    console.log(frutas[i]);
}
*/

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Neves',
    idade: 30
};

for(let keys in pessoa) {
    console.log(keys, pessoa[keys]);
}