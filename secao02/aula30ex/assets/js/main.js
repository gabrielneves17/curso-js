const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function pegaDiaSem(diaSemana) {
    const diaSemanaTexto = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

    return diaSemanaTexto[diaSemana];
}

function pegaMes(numeroMes) {
    const nomeMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return nomeMes[numeroMes];
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = pegaDiaSem(diaSemana);
    const nomeMes = pegaMes(numeroMes);

    return `<p>${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}</p>
    ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
}

h1.innerHTML = criaData(data);

/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/
