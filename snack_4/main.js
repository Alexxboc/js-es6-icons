/* 
Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const people = [
    {
        nome: 'Antonella',
        cognome: 'Riccio',
        età: 37
    },

    {
        nome: 'Alessandro',
        cognome: 'Boccardi',
        età: 34
    },

    {
        nome: 'Maria Rita',
        cognome: 'Alessi',
        età: 57
    },

    {
        nome: 'Federico',
        cognome: 'Boccardi',
        età: 32
    },

    {
        nome: 'Santiago',
        cognome: 'Boccardi',
        età: 7
    },

    {
        nome: 'Gioele',
        cognome: 'Boccardi',
        età: 14
    },

    {
        nome: 'Greta',
        cognome: 'Boccardi',
        età: 12 
    }
]

/* SOLUZIONE 1 CON CICLO FOR EACH */

// people.forEach((person) => {
//     if (person.età >= 18) {
//         person['patente'] = `${person.nome} ${person.cognome} è maggiorenne quindi può guidare 🚙`
//     } else {
//         person['patente'] = `${person.nome} ${person.cognome} è minorenne quindi non può guidare 👮‍♂️`
//     }
// })


/* SOLUZIONE 2 CON MAP */

const peopleNewArray = people.map((person) => {
    if (person.età >= 18) {
        person['patente'] = `${person.nome} ${person.cognome} è maggiorenne quindi può guidare 🚙`
    } else {
        person['patente'] = `${person.nome} ${person.cognome} è minorenne quindi non può guidare 👮‍♂️`
    }
    return person
})

console.log(person);

/* Soluzione Fabio */

const newUser = user.map(user => {
    user.full_name = user.nome + ' ' + user.cognome
    if(user.età > 18) {
        user.can_drive = true
    } else {
        user.can_drive = false
    }

    return user
})

