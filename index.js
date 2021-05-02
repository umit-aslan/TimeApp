let userName = prompt("Adınızı giriniz");
let selam = document.querySelector('#karsilama');
selam.innerHTML = `Merhaba  ${userName} Hoşgeldin!`;
window.onload = Start;



function Start() {


    let history = document.querySelector('#history');
    let hour = document.querySelector('#hour');

    let newDate = new Date();

    let gun = newDate.getDate();
    let ay = newDate.getMonth() + 1;
    let yil = newDate.getFullYear();
    let saat = newDate.getHours();
    let dakika = newDate.getMinutes();
    let saniye = newDate.getSeconds();
    let hafta = newDate.getDay();


    switch (hafta) {
        case 0:
            hafta = "Pazar";
            break;
        case 1:
            hafta = "Pazartesi";
            break;
        case 2:
            hafta = "Salı";
            break;
        case 3:
            hafta = "Çarşamba";
            break;
        case 4:
            hafta = "Perşembe";
            break;
        case 5:
            hafta = "Cuma";
            break;
        case 6:
            hafta = "Cumartesi";
            break;
    }


    gun = reload(gun);
    ay = reload(ay);
    saat = reload(saat);
    dakika = reload(dakika);
    saniye = reload(saniye);

    history.innerHTML = `${gun} / ${ay} / ${yil}  ${hafta}`;
    hour.innerHTML = `${saat} : ${dakika} : ${saniye}`;
    t = setTimeout('Start()', 1000);
}

function reload(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;

}