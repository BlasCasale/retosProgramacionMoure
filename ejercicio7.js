/*
 * Crea un programa que simule el comportamiento del sombrero selccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts:
 *   (Gryffindor, Slytherin, Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas
 *   y crear el algoritmo seleccionador:
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
*/

const question = (i) => {
    const questions = [
        `Alumno si usted tiene un tesoro que encontro con su grupo ¿Qué haría? \n
        1) Se quedaría con todo el botín. \n
        2) Lo reparte equitativamente entre su grupo equitativamente. \n
        3) Una mitad la reparte entre su grupo y la otra mitad la dona para los necesitados. \n
        4) Lo invierte todo en investigaciones que desee su grupo.
        `,
        `Alumno si encuentra un artefacto de gran poder que estaba perdido ¿Qué haría con el mismo? \n
        1) Lo utiliza para beneficio propio. \n
        2) Lo resguarda para que nadie lo utilice. \n
        3) Lo utiliza para ayudar. \n
        4) Investiga el artefacto para descubrir sus secretos.        
        `,
        `Alumno si encuentra Longhorn Rumano muerto ¿Que haría? \n
        1) Dice haberlo matado usted y se lleva el crédito. \n
        2) Intenta buscar al responsable de tal atrosidad. \n
        3) Una parte la destina a investigaciones y lo comestible lo dona a los desprotegidos. \n
        4) Evita que el cuerpo sea tocado y lo lleva a un museo para investigarlo.        
        `,
        `Usted descubre que un compañero de casa ha aprendido una maldición imperdonable ¿Qué hace uste? \n
        1) Se alia junto a él para aprender ese nuevo hechizo. \n
        2) Lo detiene usted mismo para llevarlo a juicio. \n
        3) Busca autoridades para poder acusar a su compañero que esta utilizando esa maldición. \n
        4) Intenta aprender el maleficio observando al autor pero delata al mismo.
        `,
        `En un partido de quidditch que esta ajustado ¿Qué haría para obtener la ventaja? \n
        1) Lo que este al alcance de su mano, incluso hacer trampa. \n
        2) Como grupo intentan unirse para sacarle ventaja. \n
        3) Como equipo intentan tener un juego justo para ambos equipos. \n
        4) Obtiene la ventaja con una estrategia bien planeada.
        `,
        `Usted esta teniendo un duelo de magos, donde usted esta en desventaja ¿Qué hace en esta situación? \n
        1) Utiliza algún hechizo no permitido para sacar ventaja. \n
        2) Espera la oportunidad para poder contraatacar de manera efectiva. \n
        3) Lucha con honestidad y espera al resultado justo del duelo. \n
        4) Analiza a su rival para obtener una ventaja de los hechizos que utiliza su rival.
        `,
        `Durante un evento del colegio se le aparece el señor tenebroso ¿Qué hace usted? \n
        1) Se alia a él para obtener ventaja. \n
        2) Lo enfrenta para salvar a sus compañeros. \n
        3) Defiende a los mas vulnerables del grupo con hechizos defensivos. \n
        4) Idea un plan de escape para salvar a todos o los que pueda. 
        `
    ];

    return alert(questions[i]);
};

const sortingHat = () => {

    let slytherin = 0;
    let gryffindor = 0;
    let hafflepuff = 0;
    let ravenclaw = 0;
    let selectedHouse = '';

    for (let i = 0; i < 5; i++) {
        question(i);
        const answer = prompt('Ingrese su respuesta');
        switch (answer) {
            case "1":
                slytherin++;
                break;

            case "2":
                gryffindor++;
                break;

            case "3":
                hafflepuff++;
                break;

            case "4":
                ravenclaw++;
                break;

            default:
                alert('Elija una opcion correcta (1, 2, 3, 4)');
                i--;
                break;
        };
    };

    if (slytherin > gryffindor && slytherin > hafflepuff && slytherin > ravenclaw) {
        selectedHouse = "Slytherin";
        return alert(`Iras a la casa de ${selectedHouse}`);
    }
    else if (gryffindor > slytherin && gryffindor > ravenclaw && gryffindor > hafflepuff) {
        selectedHouse = "Gryffindor";
        return alert(`Iras a la casa de ${selectedHouse}`);
    }
    else if (hafflepuff > gryffindor && hafflepuff > ravenclaw && hafflepuff > slytherin) {
        selectedHouse = "Hafflepuff";
        return alert(`Iras a la casa de ${selectedHouse}`);
    }
    else if (ravenclaw > gryffindor && ravenclaw > slytherin && ravenclaw > hafflepuff) {
        selectedHouse = "Ravenclaw";
        return alert(`Iras a la casa de ${selectedHouse}`);
    } else {
        for (let i = 5; i < 7; i++) {
            question(i);
            const answer = prompt('Ingrese su respuesta.');
            switch (answer) {
                case "1":
                    slytherin++;
                    break;

                case "2":
                    gryffindor++;
                    break;

                case "3":
                    hafflepuff++;
                    break;

                case "4":
                    ravenclaw++;
                    break;

                default:
                    alert('Elija una opcion correcta (1, 2, 3, 4)');
                    i--;
                    break;
            };
        };
    };

    if (slytherin > gryffindor && slytherin > hafflepuff && slytherin > ravenclaw) {
        selectedHouse = "Slytherin";
        return alert(`Iras a la casa de ${selectedHouse}`);
    }
    else if (gryffindor > slytherin && gryffindor > ravenclaw && gryffindor > hafflepuff) {
        selectedHouse = "Gryffindor";
        return alert(`Iras a la casa de ${selectedHouse}`);
    }
    else if (hafflepuff > gryffindor && hafflepuff > ravenclaw && hafflepuff > slytherin) {
        selectedHouse = "Hafflepuff";
        return alert(`Iras a la casa de ${selectedHouse}`);
    }
    else if (ravenclaw > gryffindor && ravenclaw > slytherin && ravenclaw > hafflepuff) {
        selectedHouse = "Ravenclaw";
        return alert(`Iras a la casa de ${selectedHouse}`);
    } else {
        let randomNumber = Math.round(Math.random() * 10);
        while (randomNumber > 4) {
            randomNumber = Math.round(Math.random() * 10);
        }
        switch (randomNumber) {
            case 1:
                selectedHouse = "Slytherin";
                alert(`Como no te puedes decidir, he decidido yo que vas a la casa de ${selectedHouse}`);
                break;

            case 2:
                selectedHouse = "Gryffindor";
                alert(`Como no te puedes decidir, he decidido yo que vas a la casa de ${selectedHouse}`);
                break;

            case 3:
                selectedHouse = "Hafflepuff";
                alert(`Como no te puedes decidir, he decidido yo que vas a la casa de ${selectedHouse}`);
                break;

            case 4:
                selectedHouse = "Ravenclaw";
                alert(`Como no te puedes decidir, he decidido yo que vas a la casa de ${selectedHouse}`);
                break;

            default:
                break;
        };
    };
};

sortingHat();