/* 2C = Two of clubs (Treboles)
2D = Two of diamonds (Diamantes)
2H = Two of hearts (Corazones)
2S = Two of spades (Espadas)

 */

let deck             = [];
const tipos          = ['C', 'D', 'H', 'S'];  // se especifica tipos de cartas (corazones, diamantes, etc)
const especiales     = ['A', 'J', 'Q', 'K'];  // es para las cartas especiales que no son numeros

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');  //Seleccionamos el boton pedir dentro del DOM

const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');   //Seleccionamos todos los elementos small (puntaje) 


//Esta funcion crea un nuevo deck

const crearDeck = () => {

    for(let i = 2; i <= 10; i++){  // recorre las cartas numericas
        for(let tipo of tipos){
            deck.push( i + tipo);

        }
        
    }

    for(let tipo of tipos){  // recorre las cartas especiales
        for(let especial of especiales){
            deck.push( especial + tipo)
        }
    }

    //console.log( deck );
    deck = _.shuffle( deck );  // libreria que ordena el arreglo de cartas al azar
    console.log(deck);   
    return deck;

}

//Llamamos a la funcion del deck
crearDeck();



//Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if( deck.length === 0){
        throw 'No hay cartas en el Deck';  // simple validacion
    }

    const carta = deck.pop();   // removemos la ultima carta del arreglo de cartas
    return carta;
}

//deck = [];
//pedirCarta();

const valorCarta = ( carta ) => {  //Con esta funcion sacamos el valor numerico de la carta para poder sumar las cartas
    const valor = carta.substring(0, carta.length-1);  // metodo substring() presenta los strings cortados, se olvida que el ultimo string existe y lo presenta
    return( isNaN( valor )) ? // isNan es uan funcion que sirve para determinar si un valor es una letra (isNotANumber)
    ( valor === 'A') ? 11 : 10 // si el valor es un AS
    : valor * 1;  // si el valor es un numero, se multiplica por 1 para que sea numerico y no se transforme en string

}

//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    console.log( puntosJugador );

    //<img class="carta" src="assets/cartas/2C.png"></img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; // 3H, JD, AS, etc.
    imgCarta.classList.add('carta');

    divCartasJugador.append( imgCarta );
    
});

