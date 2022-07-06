// Huiswerk Koos Dorssers
//
// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
console.log("------------------------------------");
console.log("Opdracht 1:")
console.log("------------------------------------");
for (let i = 0; i < 3; i++) {
    console.log("Hoera!");
}

// Einde opdracht. Scheidingsteken.
console.log("------------------------------------");
console.log(" ");

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
console.log("------------------------------------");
console.log("Opdracht 2:")
console.log("------------------------------------");

for (let i = 0; i < 4; i++) {
    console.log("loop...");
}
console.log("Klaar!");

console.log("------------------------------------");
console.log(" ");

// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over.
// Google daarom eens naar 'mdn webdocs remainder operator'.
// ==========================================
console.log("------------------------------------");
console.log("Opdracht 3:")
console.log("------------------------------------");

for (let i = 0; i < 16; i++) {
    if (i % 2 === 0)
        console.log(i + " is even");
    else
        console.log(i + " is oneven");
}
console.log("------------------------------------");
console.log(" ");

// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

console.log("------------------------------------");
console.log("Opdracht 4:")
console.log("------------------------------------");

let i = null

for (let i = 0; i <= 9; i++) {
    if (i < 3) {
        console.log(i);
    }
    if (i > 2 && i < 6) {
        console.log("> " + i);
    }
    if (i > 5 && i < 10) {
        console.log(">> " + i);
    }
}

console.log("------------------------------------");
console.log(" ");
// Einde huiswerk