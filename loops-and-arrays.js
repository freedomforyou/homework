// Huiswerk Koos Dorssers

// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

//
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

console.log("Opdracht 1:")
console.log("------------------------------------")

const names = ["Henk", "Piet", "Fred", "Joop"];
for (let i = 0; i <= 3; i++) {
    names[i] = (names[i] + "je")
}
console.log(names)

// Einde opdracht. Scheidingsteken.
console.log("------------------------------------")
console.log(" ")

// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// // Verwachtte uitkomsten:
// // Vóór het script zie je de originele waardes:
// // console.log(numbers) geeft: [2, 4, 5, 29, 38];
// // Na jouw script zie je de aangepaste waardes:
// // console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];

const numbers = [2, 4, 5, 29, 38];
console.log("Opdracht 2:")
console.log("------------------------------------")

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        numbers[i] = (numbers[i] * 2);
    } else {
        numbers[i] = (numbers[i] * 3);
    }
}
console.log(numbers)

// Einde opdracht. Scheidingsteken.
console.log("------------------------------------")
console.log(" ")


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [x] is [y]"
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// // Verwachtte uitkomsten:
// // Vóór het script zie je de originele waardes:
// // console.log(squares) geeft: [30, 2, 8, 24, 11];
// // Na jouw script zie je de aangepaste waardes:
// // console.log(squares) geeft: [
// //   'Het volume van 30 is 27000',
// //   'Het volume van 2 is 8',
// //   'Het volume van 8 is 512',
// //   'Het volume van 24 is 13824',
// //   'Het volume van 11 is 1331'
// // ]

console.log("Opdracht 3:")
console.log("------------------------------------")

const squares = [30, 2, 8, 24, 11];
const heights = [900, 4, 64, 576, 121 ];
const y = null
const x = null

for (let i = 0; i < squares.length; i++) {
    let x = squares[i]
    let y = x * heights[i]
    squares[i] = ('Het volume van ' + [x] +  ' is ' + [y] )
}
console.log(squares)

// Einde opdracht. Scheidingsteken.
console.log("------------------------------------")
console.log(" ")

// Einde huiswerk