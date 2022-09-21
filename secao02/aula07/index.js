// Não se pode criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não se pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase (nomes compostos tem a inicial de cada nome maiúscula)
// Case-sensitive (letra maiúscula ou minúsculas faz diferança para a identificação de tais constantes)
// Não se pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(typeof(primeiroNumero + segundoNumero)); // Nessa situação o Motor do Javascript passa a tratar a expressão no seu todo como uma string






