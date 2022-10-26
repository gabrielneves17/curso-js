// Condições em JS (if, else e ense if)

/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else if na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizado apenas if e else

const hora = 18;

if(hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if(hora < 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}