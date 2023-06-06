

(() => {
        'use strict'
        
        
    let deck             = [];
    const tipos          = ['C', 'D', 'H', 'S'],  // se especifica tipos de cartas (corazones, diamantes, etc)
          especiales     = ['A', 'J', 'Q', 'K'];  // es para las cartas especiales que no son numeros

    let puntosJugadores = [];
        

    //Referencias del HTML
    const btnPedir       = document.querySelector('#btnPedir'),  //Seleccionamos el boton pedir dentro del DOM
          btnDetener     = document.querySelector('#btnDetener'),
          btnNuevo       = document.querySelector('#btnNuevo');

    const divCartasJugadores       = document.querySelectorAll('.divCartas'),
          puntosHTML               = document.querySelectorAll('small');   //Seleccionamos todos los elementos small (puntaje) 

    
          //Esta funcion inicializa el juego
    const inicializarJuego = ( numJugadores = 2) => {
          deck = crearDeck();

          for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
          }
        
    }      



    //Esta funcion crea un nuevo deck

    const crearDeck = () => {

        deck = [];        
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

       
        // libreria que ordena el arreglo de cartas al azar
        return _.shuffle( deck );

    }
    

    //Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if( deck.length === 0){
            throw 'No hay cartas en el Deck';  // simple validacion
        }

          // removemos la ultima carta del arreglo de cartas
        return deck.pop();
    }

    //deck = [];
    //pedirCarta();

    const valorCarta = ( carta ) => {  //Con esta funcion sacamos el valor numerico de la carta para poder sumar las cartas
        const valor = carta.substring(0, carta.length-1);  // metodo substring() presenta los strings cortados, se olvida que el ultimo string existe y lo presenta
        return( isNaN( valor )) ? // isNan es uan funcion que sirve para determinar si un valor es una letra (isNotANumber)
        ( valor === 'A') ? 11 : 10 // si el valor es un AS
        : valor * 1;  // si el valor es un numero, se multiplica por 1 para que sea numerico y no se transforme en string

    }


    //Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; // 3H, JD, AS, etc.
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append( imgCarta );
        

    }

    //Turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
        
        let puntosComputadora = 0;

        do{

        const carta = pedirCarta();
        puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1);
        crearCarta( carta, puntosJugadores.length - 1);
             
        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        setTimeout(() => {

            (puntosMinimos === puntosComputadora) ? alert('Lo siento, esto es un empate')
                                                :((puntosMinimos > puntosComputadora) && (puntosMinimos <= 21) || (puntosComputadora > 21)) 
                                                            ? alert('Felicidades, has ganado') 
                                                            : alert('Lo siento, has perdido')


        }, 10)
        
    
    

}





//Eventos
btnPedir.addEventListener('click', () => {
    
    //Actualizo los puntos del jugador en pantalla
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos( carta, 0 );

    crearCarta( carta, 0 );
    
   
    //Condicion para checar si el jugador ya tiene mas de 21 puntos

    if ( puntosJugador > 21){
       // console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
        
       
        
                

    }else if(puntosJugador === 21){
        //console.warn('21, Genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
        
        
    }

    

    
    
});


btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugador );
        

});


btnNuevo.addEventListener('click', () => {
        console.clear();

        inicializarJuego();

        /* deck = [];
        deck = crearDeck(); */
    /*     puntosJugador = 0;
        puntosComputadora = 0; */

       /*  puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false; */
        //btnDetener.disabled = false;

        
});




})(); 





