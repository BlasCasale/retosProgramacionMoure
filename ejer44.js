/*
 * EJERCICIO:
 * ¡El último videojuego de Dragon Ball ya está aquí!
 * Se llama Dragon Ball: Sparking! ZERO.
 *
 * Simula un Torneo de Artes Marciales, al más puro estilo
 * de la saga, donde participarán diferentes luchadores, y el
 * sistema decidirá quién es el ganador.
 *
 * Luchadores:
 * - Nombre.
 * - Tres atributos: velocidad, ataque y defensa
 *   (con valores entre 0 a 100 que tú decidirás).
 * - Comienza cada batalla con 100 de salud.
 * Batalla:
 * - En cada batalla se enfrentan 2 luchadores.
 * - El luchador con más velocidad comienza atacando.
 * - El daño se calcula restando el daño de ataque del
 *   atacante menos la defensa del oponente.
 * - El oponente siempre tiene un 20% de posibilidad de
 *   esquivar el ataque.
 * - Si la defensa es mayor que el ataque, recibe un 10%
 *   del daño de ataque.
 * - Después de cada turno y ataque, el oponente pierde salud.
 * - La batalla finaliza cuando un luchador pierde toda su salud.
 * Torneo:
 * - Un torneo sólo es válido con un número de luchadores
 *   potencia de 2.
 * - El torneo debe crear parejas al azar en cada ronda.
 * - Los luchadores se enfrentan en rondas eliminatorias.
 * - El ganador avanza a la siguiente ronda hasta que sólo
 *   quede uno.
 * - Debes mostrar por consola todo lo que sucede en el torneo,
 *   así como el ganador.
 */

class Fighter {
    constructor(name, speed, attack, defense) {
      this.name = name;
      this.speed = speed;
      this.attack = attack;
      this.defense = defense;
      this.health = 100;
      this.itsAlive = true;
    }
  }
  
  const figthers = [];
  
  figthers.push(new Fighter('Goku', 90, 95, 80));
  figthers.push(new Fighter('Vegeta', 85, 90, 85));
  figthers.push(new Fighter('Gohan', 80, 88, 75));
  figthers.push(new Fighter('Freezer', 70, 100, 60));
  figthers.push(new Fighter('Cell', 85, 95, 70));
  figthers.push(new Fighter('Majin Buu', 75, 85, 95));
  figthers.push(new Fighter('Piccolo', 80, 85, 90));
  figthers.push(new Fighter('Trunks', 85, 90, 80));
  
  
  function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
  }
  
  const simuleTourament = figthers => {
    
    if (isPowerOfTwo(figthers.length)) {
      
      let figths = figthers.length - 1;
  
      const alreadyFougth = []
      
      for (let i = figths; i > 0; i--) {
        alreadyFougth.push(false)
      }
      
      let figthsThisRound = figthers.length
      while (figths != 0) {
        
        figthsThisRound = figthsThisRound / 2
        
        while (figthsThisRound > 0) {
          let figther1 = figthers[Math.floor(Math.random() * figthers.length)]
      
            while (!figther1.itsAlive) {
              figther1 = figthers[Math.floor(Math.random() * figthers.length)]
            }
        
            let figther2 = figthers[Math.floor(Math.random() * figthers.length)]
        
            while (figther1.name == figther2.name || !figther2.itsAlive) {
              figther2 = figthers[Math.floor(Math.random() * figthers.length)]
            }

            console.log(`Lucha ${figther1.name}, ${figther1.health}`)
            console.log(`Lucha ${figther2.name}, ${figther2.health}`)
        
            const index1 = figthers.findIndex((el) => el.name == figther1.name)
            const index2 = figther2.findIndex((el) => el.name == figther2.name)
        
            alreadyFougth[index1] = true
            alreadyFougth[index2] = true
        
            const moreSpeed = figther1.speed > figther2.speed

            const defenseThanAttack1 = figther1.defense > figther2.attack
            const defenseThanAttack2 = figther2.defense > figther1.attack

            let cont = true
            if (moreSpeed) {
              while (figther1.health > 0 && figther2.health > 0 && cont) {
                figther2.health = defenseThanAttack2 ? figther2.health - (figther1.attack / 10) : figther2.health - figther1.attack
                if (figther2.health <= 0) {
                  cont = false
                } else {
                  figther1.health = defenseThanAttack1 ? figther1.health - (figther1.attack / 10) : figther2.health - figther1.attack  
                  console.log(`Vida restante ${figther1.health} de ${figther1.name}`)
                  console.log(`Vida restante ${figther2.health} de ${figther2.name}`)
                }
              }
            } else {
              while (figther1.health > 0 && figther2.health > 0 && cont) {
                figther1.health = defenseThanAttack1 ? figther1.health - (figther1.attack / 10) : figther2.health - figther1.attack  
                if(figther1.health <= 0) {
                  cont = false
                } else {
                  figther2.health = defenseThanAttack2 ? figther2.health - (figther1.attack / 10) : figther2.health - figther1.attack
                  console.log(`Vida restante ${figther1.health} de ${figther1.name}`)
                  console.log(`Vida restante ${figther2.health} de ${figther2.name}`)
                }
              }
            }

            if (figther1.health <= 0) {
              figther1.itsAlive = false
              console.log(`Gano ${figther2.name}`)
              figther2.health = 100
            } else { 
              figther2.itsAlive = false
              console.log(`Gano ${figther1.name}`)
              figther1.health = 100
            }
            
            figthsThisRound = figthsThisRound - 1
        }

        alreadyFougth.forEach((el) => el == false)
        }
    }
    
    let i = 0
    while (!figthers[i].itsAlive) {
      i++
    }
    
    console.log(`El ganador del torneo fue ${figthers[i].name}`)
  
  }
  
  
  simuleTourament(figthers)
  
  
  
  
