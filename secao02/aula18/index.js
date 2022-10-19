// Objetos(básico)

//Objeto literal
/*
const pessoas1 = {
    nome: 'Gabriel',
    sobrenome: 'Neves',
    idade: 25
};

const pessoas2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};

console.log(pessoas1.nome);
console.log(pessoas1.sobrenome);
*/


// Função Factory

/*
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Gabriel', 'Neves', 24);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 41);
const pessoa5 = criaPessoa('Jean', 'Costa', 69);

console.log(pessoa1.nome, pessoa1.sobrenome);
*/



const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Neves',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



