let buah = ['mangga', 'jambu', 'jeruk', 'duren', 'apel'];

console.log(buah);

document.querySelector('#tampil').innerHTML = buah[0];


buah.forEach(e => {
    console.log(e);
});

// function kali(a, b) {
//     return a * b;
// }

// function tampil(a) {
//     return a;
// }

// console.log(kali(2, 3));
// console.log(tampil(2));

let kali = (a, b) => {
    return a * b;
}
let tampil = a => {
    console.log(a);
}

console.log(kali(2, 3));
tampil("belajar");

// let siswa = {
//     nama: 'joni',
//     sekolah: 'SMKN 2 BUDURAN',
//     kelas: 'XI RPL'
// }

// console.log(siswa);
// console.log(siswa.nama);

let siswa = '{ "Siswa" : [' +
    '{ "Nama":"Neni" , "Kelas":"XI-RPL" , "Sekolah":"SMKN 2 BUDURAN"},' +
    '{ "Nama":"Esti" , "Kelas":"XI-MM" , "Sekolah":"SMKN 2 BUDURAN"},' +
    '{ "Nama":"Leni" , "Kelas":"XI-AK" , "Sekolah":"SMKN 2 BUDURAN"} ]}';

const obj = JSON.parse(siswa);
console.log(obj.Siswa[0].Nama);
obj.Siswa.forEach(el => {
    console.log(el);
    document.querySelector("#muncul").innerHTML += el.Nama + " " + el.Kelas + " " + el.Sekolah + "<br>";
});
