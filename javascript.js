/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


/*var studenti = {
    studente1: { nome: "mastro", cognome: "geppetto", eta: 75 },
    studente2: { nome: "Bruce", cognome: "Wayne", eta: 40 },
    studente3: { nome: "Clark", cognome: "Kent", eta: 35 },
};*/

var studente1 = {
    nome: "Mastro",
    cognome: "Geppetto",
    eta: 75,
};

var studente2 = {
    nome: "Bruce",
    cognome: "Wayne",
    eta: 40,
};

var studente3 = {
    nome: "Clark",
    cognome: "Kent",
    eta: 35,
}



visualizza = document.getElementById("stampa")

for (var key in studente1) {
    console.log(studente1[key])
}

var ArrayStudenti = [studente1, studente2, studente3]

for (var i = 0; i < ArrayStudenti.length; i++) {
    var OggettoSingolo = ArrayStudenti[i]
    console.log(OggettoSingolo.nome +" "+ OggettoSingolo.cognome)
}

var studente4 = {
    nome: "",
    cognome:"",
    eta:"",
}

var nomeDaUtente = prompt("inserisci il nome")

var cognomeDaUtente = prompt("Inserisci il cognome")

var etaDaUtente = parseInt(prompt("inserisci l'età"))

studente4.nome = nomeDaUtente
studente4.cognome = cognomeDaUtente
studente4.eta = etaDaUtente
console.log(studente4.nome+" "+studente4.cognome+" "+studente4.eta)
