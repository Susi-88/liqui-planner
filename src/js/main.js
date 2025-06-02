// VARIABELS
// Gesamtbilanz anlegen
let einnahmen = 0;
let ausgaben = 0;
let bilanz = 0;

// Eingabedaten holen
let titel_1 = prompt("Titel:");
let typ_1 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag_1 = parseInt(prompt("Betrag (in Cent):"));
let datum_1 = prompt("Datum (jjjj-mm-tt):");
    
console.log(`Titel: ${titel_1}
Typ: ${typ_1}
Betrag: ${betrag_1}
Datum: ${datum_1}`);

if (typ_1 === "ein") {
    einnahmen = einnahmen + betrag_1;
    bilanz = bilanz + betrag_1;
} else if (typ_1 === "aus") {
    ausgaben = ausgaben + betrag_1;
    bilanz = bilanz - betrag_1;
} else {
    console.log("Falscher Typ");
}

let titel_2 = prompt("Titel:");
let typ_2 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag_2 = parseInt(prompt("Betrag (in Cent):"));
let datum_2 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${titel_2}
Typ: ${typ_2}
Betrag: ${betrag_2}
Datum: ${datum_2}`);

if (typ_2 === "ein") {
    einnahmen = einnahmen + betrag_2;
    bilanz = bilanz + betrag_2;
} else if (typ_2 === "aus") {
    ausgaben = ausgaben + betrag_2;
    bilanz = bilanz - betrag_2;
} else {
    console.log("Falscher Typ");
}

// Gesamtbilanz ausgaben
let positiv = bilanz >=0;

console.log(`Einnahmen: ${einnahmen} cent
Ausgaben: ${ausgaben} cent
Bilanz: ${bilanz} cent
Bilanz ist positiv: ${positiv}`);