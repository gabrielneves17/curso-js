/*
Dados Primitivos (Val imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - "São valores copiados."

Referência (Val mutáveis) - array, object, function - "São valores passados por referência. Apontam para o mesmo local na memória."
*/

/*
let a = [1, 2, 3];
let b = [...a]; // Assim é possível copiar o valor de A. Neste caso não é só uma referência, mas sim uma cópia.
let c = b;
console.log(a, b);
a.push(4);

console.log(a);
console.log(b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a}; 

a.nome = 'João';
console.log(b);
console.log(a);
