// Mais diferenças entre var/let/const

const verdadeira = true;

// Let tem escopo de bloco
// Var só tem escopo de função

/*
let nome = 'Luiz'; // Criando
var nome2 = 'Luiz'; // Criando


if (verdadeira) {
    let nome = 'Otávio'; // Criando
    var nome2 = 'Rogério'; // Redeclarando
    if (verdadeira) {
        var nome2 = 'Ronaldo'; // Redeclarando
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);
*/

/*
var sobrenome = 'Miranda';

function falaOi() {
    
    if(verdadeira) {
        let nome = 'Luiz';
        var sobrenome = 'Miranda';
    }
    console.log(sobrenome);
}

falaOi();
*/

console.log(sobrenome);

let sobrenome = 'Miranda';
