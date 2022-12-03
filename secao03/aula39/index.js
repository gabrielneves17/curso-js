// Estruturas de repetição (While/Do While)

/*
const nome = 'Gabriel';
let i = 0;

while(i < nome.length) {
    console.log(nome[i]);
    i++;
}

console.log('Segue a vida...');
*/

function random(min, max) {
    let r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);