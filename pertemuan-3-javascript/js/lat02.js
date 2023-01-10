// document.querySelector("#paragraf").innerHTML="Saya Belajar Javascript";

// document.querySelector("#content").innerHTML = "<h1>Ganti Isi</h1>";

let tanggal = 7;
let bulan = 7;
let hasil = "Tanggal dan Bulan Tidak Valid !";

if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan <13) {
    hasil = "Tanggal dan Bulan Benar !";

    if (bulan == 1){
        if(tanggal >= 1 && tanggal <= 19){
            hasil = "Capricorn";
        } else {
            hasil = "Aquarius";
        }
    }

    if (bulan == 2){
        if(tanggal >= 1 && tanggal <= 18){
            hasil = "Aquarius";
        } else {
            hasil = "Pisces";
        }
    }

    if (bulan == 3){
        if(tanggal >= 1 && tanggal <= 20){
            hasil = "Pisces";
        } else {
            hasil = "Aries";
        }
    }

    if (bulan == 4){
        if(tanggal >= 1 && tanggal <= 19){
            hasil = "Aries";
        } else {
            hasil = "Taurus";
        }
    }

    if (bulan == 5){
        if(tanggal >= 1 && tanggal <= 20){
            hasil = "Taurus";
        } else {
            hasil = "Gemini";
        }
    }

    if (bulan == 6){
        if(tanggal >= 1 && tanggal <= 21){
            hasil = "Gemini";
        } else {
            hasil = "Cancer";
        }
    }

    if (bulan == 7){
        if(tanggal >= 1 && tanggal <= 22){
            hasil = "Cancer";
        } else {
            hasil = "Leo";
        }
    }

    if (bulan == 8){
        if(tanggal >= 1 && tanggal <= 22){
            hasil = "Leo";
        } else {
            hasil = "Virgo";
        }
    }

    if (bulan == 9){
        if(tanggal >= 1 && tanggal <= 22){
            hasil = "Virgo";
        } else {
            hasil = "Libra";
        }
    }

    if (bulan == 10){
        if(tanggal >= 1 && tanggal <= 23){
            hasil = "Libra";
        } else {
            hasil = "Scorpion";
        }
    }

    if (bulan == 11){
        if(tanggal >= 1 && tanggal <= 21){
            hasil = "Scorpion";
        } else {
            hasil = "Sagitarius";
        }
    }

    if (bulan == 12){
        if(tanggal >= 1 && tanggal <= 21){
            hasil = "Sagitarius";
        } else {
            hasil = "Capricorn";
        }
    }
}
console.log(hasil);

document.querySelector("#paragraf").innerHTML = `<h1>${hasil}</h1>`;