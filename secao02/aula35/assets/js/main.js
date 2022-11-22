/*
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const elemCriado = document.createElement(tag);
    elemCriado.innerText = texto;
    div.appendChild(elemCriado);
}
container.appendChild(div);
*/

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const elemCriado = document.createElement(tag);
    const textoCriado = document.createTextNode(texto);
    elemCriado.appendChild(textoCriado);
    div.appendChild(elemCriado);
}
container.appendChild(div);