function perkali (a, b) {
    return a*b;
}

console.log(perkali(4, 3));

let kali = (a, b) => a*b;

console.log(kali(2,3));

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