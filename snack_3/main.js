/* 
Snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/


const animals = [
    {
        nome: 'pecora',
        famiglia: 'ovinidi',
        classe: 'mammifero'
    },

    {
        nome: 'cavallo',
        famiglia: 'equinidi',
        classe: 'mammifero'
    },

    {
        nome: 'aquila',
        famiglia: 'accipitridae',
        classe: 'uccello'
    },

    {
        nome: 'tigre',
        famiglia: 'felini',
        classe: 'mammifero'
    },

    {
        nome: 'pecora',
        famiglia: 'ovinidi',
        classe: 'mammifero'
    },

    {
        nome: 'pavone',
        famiglia: 'galliforme',
        classe: 'uccello'
    },

    {
        nome: 'pipistrello',
        famiglia: 'chiroptera',
        classe: 'mammifero'
    },

    {
        nome: 'pettirosso',
        famiglia: 'musciacapidae',
        classe: 'uccello'
    },

    {
        nome: 'rana',
        famiglia: 'ranidi',
        classe: 'anfibio'
    },

    {
        nome: 'camaleonte',
        famiglia: 'rafinesque',
        classe: 'rettili'
    },

    {
        nome: 'zebra',
        famiglia: 'equidi',
        classe: 'mammifero'
    },

]

const mammiferi = animals.filter(animals => {
    return animals.classe === 'mammifero'
} )

console.log(mammiferi);