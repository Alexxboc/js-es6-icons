/* 
SNACK 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 arra
*/

const cars = [
    
    { 
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    },


    { 
        marca: 'opel',
        modello: 'corsa',
        alimentazione: 'benzina'
    },

    { 
        marca: 'audi',
        modello: 'A4',
        alimentazione: 'benzina'
    },

    { 
        marca: 'mercedes',
        modello: 'classeA',
        alimentazione: 'diesel'
    },

    { 
        marca: 'fiat',
        modello: '500',
        alimentazione: 'diesel'
    },

    { 
        marca: 'seat',
        modello: 'Ibiza',
        alimentazione: 'gpl'
    },

    { 
        marca: 'seat',
        modello: 'leon',
        alimentazione: 'diesel'
    },

    { 
        marca: 'fiat',
        modello: 'multipla',
        alimentazione: 'gpl'
    },

    { 
        marca: 'seat',
        modello: 'leon',
        alimentazione: 'diesel'
    },

    { 
        marca: 'smart',
        modello: 'for two',
        alimentazione: 'elettrico'
    }
]
const benzina = cars.filter(cars => cars.alimentazione === 'benzina')
const diesel = cars.filter(cars => cars.alimentazione === 'diesel')
const gas = cars.filter(cars => {
    if(cars.alimentazione !== 'benzina' && cars.alimentazione !== 'diesel')
    return true
})

console.log(benzina);
console.log(diesel); 
console.log(gas);






