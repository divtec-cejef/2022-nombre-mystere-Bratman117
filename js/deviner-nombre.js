/**
 * Jeu du nombre mystère
 * @author  Michaël Demars
 * @version 0.2
 * @since   2022-08-30 (date de création)
 */

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';
    const MIN = 1;
    const MAX = 100;

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min {number}
     * @param max {number}
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let nbrTire = tireNombre(MIN, MAX);
    console.log(nbrTire);

    let message = `Le nombre à deviner est compris entre ${MIN} et ${MAX}.`;
    let nbrEssais = 0;
    let reponse;

    do{
        reponse = Number(prompt(message));

        if (isNaN(reponse))
            message = 'Réponse invalide!';
        else {
            nbrEssais++;
            message = reponse > nbrTire ? 'C\'est moins' : 'C\'est plus';
        }
    }while(nbrTire !== reponse);

    alert(`Bravo, tu as gagné en ${nbrEssais} coups !`);
}()); // main IIFE
