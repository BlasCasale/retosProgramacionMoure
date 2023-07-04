/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */


function mostarJuego(array = Array) {

    const rules = {
        "🗿": ["✂️"],
        "📄": ["🗿"],
        "✂️": ["📄"]
    }

    let player1 = 0
    let player2 = 0

    for (const juego of array) {
        const player1game = juego[0]
        const player2game = juego[1]

        if (rules[player1game].includes(player2game)){
            player1++
        } else {
            player2++
        }
    }

    if (player1 == player2) {
        console.log("Empate")
    } else if (player1 > player2) {
        console.log(`Gano jugador 1`)
    } else {
        console.log(`Gano jugador 2`)
    }


}

const partido = [
    ["🗿", "📄"],
    ["✂️", "📄"],
    ["🗿", "📄"],
    ["✂️", "🗿"]
]

mostarJuego(partido)