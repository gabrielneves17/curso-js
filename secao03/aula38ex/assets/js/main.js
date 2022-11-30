/*
const titulo = document.querySelector('.container');
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}
*/

const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for(let valor of p) {
    valor.style.backgroundColor = backgroundColorBody;
    valor.style.color = '#ffffff';
}