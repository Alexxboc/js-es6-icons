/* 
Snack 2:
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo
 e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const names = ['alessandro', 'GIOELE', 'SANTIAGO', 'Antonella', 'RITA','leonardo', 'Federico' ]

const uppercaseFirstLetter = names.map((firstName) => {
    return  firstName.toUpperCase().slice(0,1) + firstName.toLowerCase().slice(1)
})

console.log(uppercaseFirstLetter);