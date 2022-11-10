const titulo = document.querySelector('.container h1');
const data = new Date();

function pegaDia(diaSemana) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

    return diasSemana[diaSemana];
}

function pegaMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[numeroMes];
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = pegaDia(diaSemana);
    const nomeMes = pegaMes(numeroMes);

    return `<p>${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} <p>${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}</p>`
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

titulo.innerHTML = criaData(data);

/*
const titulo = document.querySelector('.container h1');
const data = new Date();
titulo.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })
*/



