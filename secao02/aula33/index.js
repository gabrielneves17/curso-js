// Atribuição via desestruturação (objetos)

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Neves',
    idade: 24,
    endereco: {
        rua: 'Rua Pedro Daniel de Souza',
        numero: 171
    }
};

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);