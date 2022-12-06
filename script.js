console.log('JS OK');

/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
*/


/*
1. Prendere l'elemento dal DOM;
2. Preparare variabile del prezzo per km;
3. Chiedere all'utente il numero di km che vuole percorrere;
4. Chiedere all'utente l'età del passeggero;
5. Calcolare prezzo totale del viaggio;
6. Applicare sconto 20% per minorenni (< 18 anni);
7. Applicare sconto 40% per over 65 (>= 65 anni);
8. Calcolare prezzo finale in forma umana;
9. Stampare in DOM;
*/


// 1. Prendere l'elemento dal DOM:
const km = document.querySelector('.km');
const age = document.querySelector('.age');
const button = document.querySelector('button');
const finalPrice = document.querySelector('.final-price');

// 2. Preparare variabile del prezzo per km:
const priceKm = 0.21;


// CONTROLLO
    // 3. Aggiungo eventlistener al button
    button.addEventListener('click', function(){
    // 4. Prendo valori inseriti dall'utente
    const nKm = km.value;
    const userAge = age.value;
    // 5. Calcolare prezzo totale del viaggio:
    let ticketPrice = nKm * priceKm;
    // 6. Applicare sconto 20% per minorenni (< 18 anni):
    if (userAge < 18){
        let sconto = ticketPrice * 20 / 100;
        ticketPrice = ticketPrice - sconto;
    }
    // 7. Applicare sconto 40% per over 65 (>= 65 anni):
    else if (userAge >= 65){
        let sconto = ticketPrice * 40 / 100;
        ticketPrice = ticketPrice - sconto;
    }
    // 8-9. Stampa in DOM:
    finalPrice.innerText = ticketPrice.toFixed(2) + '\u20AC';
});

