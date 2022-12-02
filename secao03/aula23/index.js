/*
Avaliação de Curto-circuito(Short-circuit)

&& - AND: Exemplo: (false && true -> false) Para qualquer expressão falsa retorna a mesma e só retorna uma expressão verdadeira quando todas forem verdadeiras.
|| - OR: Exemplo: (true || false -> true) Se caso qualquer uma das expressões testadas forem verdadeiras retorna a primeira que encontrar e for verdadeira.
! - NOT

Valores que avaliam em falso em JS

FALSY
- false
- 0
- String vazia: '', "", ``
- null / undefined
- NaN
*/

/*
function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'Joãozinho';
console.log(vaiExecutar && falaOi());
*/


const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);


/*
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
*/




