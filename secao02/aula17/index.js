// Funções(Básico)

/*
    **Funções simples**
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const valorFunc = saudacao('Gabriel');
console.log(valorFunc);


function soma(x=0, y=0) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4, 2);
console.log(resultado);
*/

/*
   **Função anônima**
const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

/*
   **Arrow Function**
const raiz = (n) => {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

// **Arrow Function simplificada para linha única**
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));



