/* 2C = Two of clubs (Treboles)
2D = Two of diamonds (Diamantes)
2H = Two of hearts (Corazones)
2S = Two of spades (Espadas)

 */

let deck             = [];
const tipos          = ['C', 'D', 'H', 'S'];
const especiales     = ['A', 'J', 'Q', 'K'];

const CrearDeck = () =>{

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

    console.log( deck );

    deck = _.shuffle( deck );

    console.log(deck);
    return deck;

}

CrearDeck();