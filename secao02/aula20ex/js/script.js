function meuEscopo() {
    const formulario = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');
    const pessoas = [];
    function recebeEvento(evento) {
        evento.preventDefault();
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} <br> ${sobrenome.value} <br> ${peso.value} <br> ${altura.value}</p>`;
        nome.value = ''
        sobrenome.value = ''
        peso.value = ''
        altura.value = ''
        nome.focus();
    }
    formulario.addEventListener('submit', recebeEvento);
}
meuEscopo();

