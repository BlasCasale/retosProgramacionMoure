/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
*/

function generarContrasenia (long, lowCase, UpperCase, numbers, symbols) {
    const lower = "abcdefghijklmñopqrstuvwxyz"
    const number = "0123456789"
    const simbols = "!@.-_%$#"
    
    let pass = ""

    if (long < 8 && long > 16) {
        console.log("Ingrese un número entre 8 y 16.")
    } else {
        let useToPass = ""

        if (lowCase == true) useToPass += lower
        if (UpperCase == true) useToPass += lower.toUpperCase()
        if (numbers == true) useToPass += number
        if (symbols == true) useToPass += simbols

        for (let i = 0; i < long; i++) {
            pass += useToPass.charAt(Math.floor(Math.random() * useToPass.length))
        }
    }
    return pass
}
console.log(generarContrasenia(10, true, false, true, false))

console.log(generarContrasenia(15, true, true, true, false))

console.log(generarContrasenia(13, false, true, false, true))