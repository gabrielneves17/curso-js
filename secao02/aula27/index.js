// Operações ternárias
// (Expressão ? 'Valor verdadeiro' : 'Valor falso')

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta'; //Setando valor padrão

console.log(nivelUsuario, corPadrao);