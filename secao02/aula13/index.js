//               01234567
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString[2]); // Usa o índice para retornar o elemento indicado na variável de tipo string.
console.log(umaString.charAt(2)); // Tem a mesma função do método acima, porém não retorna erro caso o índice indicado não exista.
console.log(`${umaString} em um lindo dia.`); // Formas de concatenação
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(umaString.indexOf('t', 2)); //Retorna o índice de localização do valor armazenado. Caso seja um texto retorna o índice de início desse texto. Caso o valor procurado não exista retorna -1
console.log(umaString.lastIndexOf('x', 6)); //Retorna o índice de localização do valor armazenado, porém de trás pra frente.
console.log(umaString.match(/[a-z]/g)); //Expressão regular que retorna todas as letras minúsculas em forma de array.
console.log(umaString.search(/o/)) //Retorna também o índice do valor deseja, mas sua diferença está na aceitação de expressões regulares.
console.log(umaString.replace(/r/g, '#')) //Utiliza expressões regulares e também consegue alterar valores em variáveis.
console.log(umaString.length); //Atributo que permite ver o comprimento ou tamanho de strings armazenadas.
console.log(umaString.slice(-5, -1)); //Faz o fatiamento de um trecho de texto usando o índice do ínicio e o índice do final do trecho.
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); //Faz o fatiamento também.
console.log(umaString.split(' ', 3)); //Cria um array com os elementos armazenados na varíavel.
