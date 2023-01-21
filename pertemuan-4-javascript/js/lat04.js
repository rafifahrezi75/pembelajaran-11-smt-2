// ---------- Materi addEventlistener ------------

// klik.addEventListener("click", hasil);

// klik.onclick = function (b) {
//     b = "coba";
//     alert(b)
// }

// function hasil(a) {
//     alert(a);
// }


// ---------- Function Zodiak ----------

let see = document.querySelector("#learn");
// let tgl = document.querySelector("#tanggal");
// let bln = document.querySelector("#bulan");

function zodiak (bln, tgl) {
    bln = document.getElementById("bulan").value;
    tgl = document.getElementById("tanggal").value;
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
        see.innerHTML = hasil;
    }
}

// ---------- Function Tes Kelulusan ----------


let muncul = document.querySelector("#no");

function lulus(nilai) {
    nilai = document.getElementById("nilai").value;

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
    console.log(hasil);
    muncul.innerHTML = hasil;
}

function terbilang (angka) {

}

// ---------- Function Tes Apakah Bilangan Termasuk Prima ----------


let lihat = document.querySelector("#prm");

function prima(bilangan) {
    bilangan = document.getElementById("angka").value;
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
    console.log(hasil);
    lihat.innerHTML = hasil;
}


let tampil = document.querySelector("#belajar");

function terbilang() {
    let angka = document.getElementById("num").value;
    function conv(angka) {

        let bil = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
        if (angka < 12) {
            return bil[angka];
        } else if (angka < 20) {
            return conv(angka - 10) + "belas";
        } else if (angka < 100) {
            return conv(Math.floor(parseInt(angka) / 10)) + " puluh " + conv(parseInt(angka) % 10);
        } else if (angka < 200) {
            return "seratus " + conv(parseInt(angka) - 100);
        } else if (angka < 1000) {
            return conv(Math.floor(parseInt(angka) / 100)) + " ratus " + conv(parseInt(angka) % 100);
        } else if (angka < 2000) {
            return "seribu " + conv(parseInt(angka) - 1000);
        } else if (angka < 1000000) {
            return conv(Math.floor(parseInt(angka) / 1000)) + " ribu " + conv(parseInt(angka) % 1000);
        } else if (angka < 1000000000) {
            return conv(Math.floor(parseInt(angka) / 1000000)) + " juta " + conv(parseInt(angka) % 1000000);
        } else if (angka < 1000000000000) {
            return conv(Math.floor(parseInt(angka) / 1000000000)) + " milyar " + conv(parseInt(angka) % 1000000000);
        } else if (angka < 1000000000000000) {
            return conv(Math.floor(parseInt(angka) / 1000000000000)) + " trilyun " + conv(parseInt(angka) % 1000000000000);
        }
    }
    tampil.innerHTML = conv(angka);
}