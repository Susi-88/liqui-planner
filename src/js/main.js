// VARIABELS
// Gesamtbilanz anlegen
let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    titel, 
    typ, 
    betrag, 
    datum;

// Eingabedaten holen
const eintrag_erfassen = function(){
    titel = prompt("Titel:");
    typ = prompt("Typ (Einnahme oder Ausgabe):");
    betrag = parseInt(prompt("Betrag (in Cent):"));
    datum = prompt("Datum (jjjj-mm-tt):");
};


// Eintrag Ausgeben
const eintrag_ausgeben = function(titel, typ, betrag, datum){
    console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag}
Datum: ${datum}`
    );
};

// Eintrag mmit Gesamtbilanz Verrechnen
const eintrag_mit_gesamtbilanz_verrechnen = function(typ, betrag){
    if (typ === "ein") {
        einnahmen = einnahmen + betrag;
        bilanz = bilanz + betrag;
    } else if (typ === "aus") {
        ausgaben = ausgaben + betrag;
        bilanz = bilanz - betrag;
    } else {
        console.log("Falscher Typ");
    }
};

// Gesamtbilanz ausgaben
const gesamtbilanz_ausgeben = function(einnahmen, ausgaben, bilanz){
    console.log(`Einnahmen: ${einnahmen} cent
    Ausgaben: ${ausgaben} cent
    Bilanz: ${bilanz} cent
    Bilanz ist positiv: ${bilanz >=0}`
    );
};


// Eintrag hinzufügen
const eintrag_hinzufuegen = function(){
    eintrag_erfassen();
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    eintrag_ausgeben(titel, typ, betrag, datum);
    gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
};

eintrag_hinzufuegen();
eintrag_hinzufuegen();
eintrag_hinzufuegen();