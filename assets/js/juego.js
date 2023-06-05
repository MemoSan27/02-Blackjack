/* 2C = Two of clubs (Treboles)
2D = Two of diamonds (Diamantes)
2H = Two of hearts (Corazones)
2S = Two of spades (Espadas)

 */

let deck             = [];
const tipos          = ['C', 'D', 'H', 'S'];
const especiales     = ['A', 'J', 'Q', 'K'];

//Esta funcion crea un nuevo deck

const crearDeck = () =>{

    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push( i + tipo);

        }
        
    }

    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push( especial + tipo)
        }
    }

    //console.log( deck );
    deck = _.shuffle( deck );
    console.log(deck);
    return deck;

}

//Llamamos a la funcion del deck
crearDeck();



//Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if( deck.length === 0){
        throw 'No hay cartas en el Deck';
    }

    const carta = deck.pop();

    
    console.log( deck );
    console.log( carta );
    return carta;
}

//deck = [];
pedirCarta();