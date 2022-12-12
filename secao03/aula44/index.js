// Tratando e lançando erros(try, catch, throw)

/*
try {
    console.log(naoExisto);
} catch(err) {
    console.log('naoExisto não existe');
    console.log(err);
}
*/

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Os valores digitados precisam ser números.');
    }

    return x + y;
}


try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(err) {
    // console.log(err); Nunca lançar erro ao usuário atráves do front
    console.log('Alguma coisa mais amigável para o usuário');
}