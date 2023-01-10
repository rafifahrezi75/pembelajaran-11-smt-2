
zodiak(1, 31);

function zodiak (bln, tgl) {
    let hasil = "Salah !";

    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "Zodial Belum Dibuat !";

        if (bln == 1 && tgl < 32) {
            hasil = "Capricorn";
            if (tgl > 21) {
                hasil = "Aquarius";
            }
        }

        if (bln == 2  && tgl < 29) {
            hasil = "Aquarius";
            if (tgl > 18) {
                hasil = "Pisces";
            }
        }

        if (bln == 3  && tgl < 32) {
            hasil = "Pisces";
            if (tgl > 18) {
                hasil = "Aries";
            }
        }

        if (bln == 4 && tgl < 31) {
            hasil = "Aries";
            if (tgl > 18) {
                hasil = "Taurus";
            }
        }

        if (bln == 5 && tgl < 32) {
            hasil = "Taurus";
            if (tgl > 18) {
                hasil = "Gemini";
            }
        }

        if (bln == 6 && tgl < 31) {
            hasil = "Gemini";
            if (tgl > 18) {
                hasil = "Cancer";
            }
        }

        if (bln == 7 && tgl < 31) {
            hasil = "Cancer";
            if (tgl > 18) {
                hasil = "Leo";
            }
        }

        if (bln == 8 && tgl < 32) {
            hasil = "Leo";
            if (tgl > 18) {
                hasil = "Virgo";
            }
        }

        if (bln == 9 && tgl < 31) {
            hasil = "Virgo";
            if (tgl > 18) {
                hasil = "Libra";
            }
        }

        if (bln == 10 && tgl < 32) {
            hasil = "Libra";
            if (tgl > 18) {
                hasil = "Scorpio";
            }
        }

        if (bln == 11 && tgl < 31) {
            hasil = "Scorpio";
            if (tgl > 18) {
                hasil = "Sagitarius";
            }
        }

        if (bln == 12 && tgl < 32) {
            hasil = "Sagitarius";
            if (tgl > 18) {
                hasil = "Capricorn";
            }
        }

        console.log(hasil);
    }
}

function lulus (nilai) {
    
}

function terbilang (angka) {
    
}

function prima (bilangan) {
    
}