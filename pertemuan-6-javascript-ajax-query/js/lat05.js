function perkali (a, b) {
    return a*b;
}

console.log(perkali(4, 3));

let kali = (a, b) => a*b;

console.log(kali(2,3));


// ---------- Arrow Function Zodiak ----------

let zodiak = (tg, bl) => {
    hasil = "Tanggal Invalid";
    if (bl < 13 && bl > 0 && tg < 32 && tg > 0) {

        if ((bl == 1 && tg < 32)) {
            hasil = "Capricorn";
            if (tg > 21) {
                hasil = "Aquarius";
            }
        }

        if (bl == 2 && tg < 29) {
            hasil = "Aquarius";
            if (tg > 18) {
                hasil = "Pisces";
            }
        }

        if (bl == 3 && tg < 32) {
            hasil = "Pisces";
            if (tg > 18) {
                hasil = "Aries";
            }
        }

        if (bl == 4 && tg < 31) {
            hasil = "Aries";
            if (tg > 18) {
                hasil = "Taurus";
            }
        }

        if (bl == 5 && tg < 32) {
            hasil = "Taurus";
            if (tg > 18) {
                hasil = "Gemini";
            }
        }

        if (bl == 6 && tg < 31) {
            hasil = "Gemini";
            if (tg > 18) {
                hasil = "Cancer";
            }
        }

        if (bl == 7 && tg < 31) {
            hasil = "Cancer";
            if (tg > 18) {
                hasil = "Leo";
            }
        }

        if (bl == 8 && tg < 32) {
            hasil = "Leo";
            if (tg > 18) {
                hasil = "Virgo";
            }
        }

        if (bl == 9 && tg < 31) {
            hasil = "Virgo";
            if (tg > 18) {
                hasil = "Libra";
            }
        }

        if (bl == 10 && tg < 32) {
            hasil = "Libra";
            if (tg > 18) {
                hasil = "Scorpio";
            }
        }

        if (bl == 11 && tg < 31) {
            hasil = "Scorpio";
            if (tg > 18) {
                hasil = "Sagitarius";
            }
        }

        if (bl == 12 && tg < 32) {
            hasil = "Sagitarius";
            if (tg > 18) {
                hasil = "Capricorn";
            }
        }
    }
    return hasil;
}
console.log(zodiak(3, 8));


// ---------- Arrow Function Kelulusan ----------

let lulus = (nilai) => {
    let kkmc = 70;
    let kkmb = 84;
    let kkma = 91;
    let hasil = "Nilai Tidak Valid !";
    if (nilai > 0 && nilai <= 100 ) {
        if (nilai > kkmc) {
            hasil = "Lulus Predikat Nilai C";
        }
        if (nilai > kkmb) {
            hasil = "Lulus Predikat Nilai B";
        }
        if (nilai > kkma) {
            hasil = "Lulus Predikat Nilai A";
        }
        if (nilai <= kkmc) {
            hasil = "Tidak Lulus !";
        }
    }
    return hasil;
}
console.log(lulus(89));


// ---------- Arrow Function Terbilang / Konversi Angka ----------

let terbilang = (angka) => {
    let bilangan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
    if (angka < 12) {
        return bilangan[angka];
    } else if (angka < 20) {
        return terbilang(angka - 10) + "belas";
    } else if (angka < 100) {
        return terbilang(Math.floor(parseInt(angka) / 10)) + " puluh " + terbilang(parseInt(angka) % 10);
    } else if (angka < 200) {
        return "seratus " + terbilang(parseInt(angka) - 100);
    } else if (angka < 1000) {
        return terbilang(Math.floor(parseInt(angka) / 100)) + " ratus " + terbilang(parseInt(angka) % 100);
    } else if (angka < 2000) {
        return "seribu " + terbilang(parseInt(angka) - 1000);
    } else if (angka < 1000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000)) + " ribu " + terbilang(parseInt(angka) % 1000);
    } else if (angka < 1000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000)) + " juta " + terbilang(parseInt(angka) % 1000000);
    } else if (angka < 1000000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000000)) + " miliyar " + terbilang(parseInt(angka) % 1000000000);
    } else if (angka < 1000000000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000000000)) + " trilyun " + terbilang(parseInt(angka) % 1000000000000);
    }
}
console.log(terbilang(55));


// ---------- Arrow Function Tes Apakah Bilangan Termasuk Prima ----------

let prima = (bilangan) => {
    let prima = true
    let hasil = "";
    if (bilangan < 2) {
        hasil = "Tidak Valid (Bil Prima dimulai dari angka 2)";
    } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i === 0) {
                prima = false;
            }
        }
        if (prima) {
            hasil = bilangan + " Merupakan bilangan Prima";
        }else{
            hasil = bilangan + " Bukan bilangan Prima";
        }
    }
    return hasil;
}
console.log(prima(775));