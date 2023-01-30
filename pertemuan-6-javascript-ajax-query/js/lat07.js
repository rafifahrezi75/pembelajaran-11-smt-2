let bil = [1, 3, 5, 7, 9];

function kali(num) {
    return num * 2;
}

console.log(kali(2));

let hasil = bil.map(num => num + 2);

console.log(hasil);

let keluar = "<table border='1px'><thead><tr><th>Nomor</th></tr></thead><tbody>";
hasil.forEach(el => {
    console.log(el);
    keluar += `<tr><td>${el}</td></tr>`;
});
keluar += "</tbody></table>";

document.getElementById("atas").innerHTML = keluar; 

let siswa = [
    {
        nama: "neni",
        sekolah: "smkn 2 buduran",
        kelas: "xi rpl"
    },
    {
        nama: "nurdin",
        sekolah: "smkn 12 buduran",
        kelas: "xi rpl"
    },
    {
        nama: "nasrun",
        sekolah: "smkn 32 buduran",
        kelas: "xi rpl"
    }
];

console.log(siswa);

let out = "<table border='1px'><thead><tr><th>Nama</th><th>Sekolah</tr></thead><tbody>";
has = siswa.map(n => out += `<tr><td>${n.nama}</td><td>${n.sekolah}</td></tr>`);
out += "</tbody></table>";

document.getElementById("tabel").innerHTML = out; 