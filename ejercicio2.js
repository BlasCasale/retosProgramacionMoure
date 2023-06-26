/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
*/

const secuencia = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"]

const secuencia2 = ["P1", "P1", "P2", "P1", "P1"]


function mostrarJuego(juego = Array) {
    const puntos = ["Love", 15, 30, 40, "Deuce", "advance", "ganador"]

    let jugador1 = 0
    let jugador2 = 0

    juego.map(punto => {
        switch (punto) {
            case "P1":
                jugador1++

                if (jugador1 <= 3 && jugador2 <= 3) {

                    if (jugador1 === 3 && jugador2 === 3) {
                        console.log(`${puntos[4]}`)
                        break;
                    }

                    console.log(`Player 1: ${puntos[jugador1]} - Player 2: ${puntos[jugador2]}`)

                } else if (jugador1 >= 3 && jugador2 >= 3) {

                    if (jugador1 === jugador2) {

                        console.log(`${puntos[4]}`)

                    } else if (jugador1 - jugador2 === 1) {

                        console.log(`Player 1 ${puntos[5]}`)

                    } else if (jugador1 - jugador2 === 2) {

                        console.log(`El ${puntos[6]} es Player 1`)
                    }

                } else if (jugador1 > 3 && jugador2 < 3) {
                    console.log(`El ${puntos[6]} es Player 1`)
                }
                break;

            case "P2":
                jugador2++

                if (jugador1 <= 3 && jugador2 <= 3) {

                    if (jugador1 === 3 && jugador2 === 3) {
                        console.log(`${puntos[4]}`)
                        break;
                    }

                    console.log(`Player 1: ${puntos[jugador1]} - Player 2: ${puntos[jugador2]}`)

                } else if (jugador1 >= 3 && jugador2 >= 3) {

                    if (jugador1 === jugador2) {

                        console.log(`${puntos[4]}`)

                    } else if (jugador2 - jugador1 === 1) {

                        console.log(`Player 1 ${puntos[5]}`)

                    } else if (jugador2 - jugador1 === 2) {

                        console.log(`El ${puntos[6]} es Player 1`)
                    }

                } else if (jugador1 < 3 && jugador2 > 3) {
                    console.log(`El ${puntos[6]} es Player 2`)
                }


                break;

            default:
                break;
        }
    })

}

mostrarJuego(secuencia2)