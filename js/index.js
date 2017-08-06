'use strict'

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {


    var oprocentowanieOpodatkowane = oprocentowanie;
    if (podatek) {
        oprocentowanieOpodatkowane = oprocentowanie * 0.81;
    }

    var kapital = wplata * Math.pow(1 + oprocentowanieOpodatkowane / okresKapitalizacji, iloscLat * okresKapitalizacji);

    return (Math.round(kapital * 100) / 100);
}






function oblicz(event) {
    event.preventDefault();
    
    var wplata = document.querySelector('#wplata').value;
    var iloscLat = document.querySelector('#ilosc-lat').value;
    var okresKapitalizacji = document.querySelector('#okreskapitalizacji').value;
    var oprocentowanie = document.querySelector('#oprocentowanie').value / 100;
    var podatek = document.querySelector('#podatek').checked;
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    document.querySelector('#wynik').innerText = wynik;
}
