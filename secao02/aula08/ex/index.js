/*
- Gabriel Neves tem 24 anos, pesa 57 kg, tem 1.8 de altura e seu IMC é de 20.20
- Gabriel Neves nasceu em...
*/

const nome = 'Gabriel';
const sobrenome = 'Neves';
const idade = 24;
const peso = 57;
const altura = 1.68;
let imc = peso / (altura*altura);
let agora = new Date();
let ano = agora.getFullYear();
let anoNasc = ano - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}`);