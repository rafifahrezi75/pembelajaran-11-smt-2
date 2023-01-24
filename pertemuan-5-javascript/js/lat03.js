
let isi =  document.querySelector("#isi");
isi.innerHTML = "<h1>Soto</h1>" + "<p>Deskripsi Soto</p>" + '<img src="images/bakso.jpg" alt="">';

isi.innerHTML = "<h1>Rawon</h1>";
isi.innerHTML += "<p>Deskripsi Rawon</p>";
isi.innerHTML += '<img src="images/bakso.jpg" alt="">';


for (let i = 0; i < 10 ; i++) {
    console.log(i);
    
    document.querySelector("#paragraf").innerHTML += "<h1>" + i + "<h1>";
}

// let tabel = document.querySelector("#tabel");
// tabel.innerHTML = "<table>" 
//                 + "<thead><tr><th>Nomer</th></tr></thead>"
//                 + "<tbody>"
//                 + "<tr><td>1</td></tr>"
//                 + "<tr><td>2</td></tr>"
//                 + "<tr><td>3</td></tr>"
//                 + "<tr><td>4</td></tr>"
//                 + "<tr><td>5</td></tr>"
//                 + "</tbody>"
//                 + "</table>";

// Cara Pertama

// let tabel = document.querySelector("#tabel");
// tabel.innerHTML = '<tr>' + '<th>Nomor</th>' + '</tr>';
// tabel.innerHTML = '<tr><td>1</td></tr>';
// tabel.innerHTML = '<tr><td>2</td></tr>';
// tabel.innerHTML = '<tr><td>3</td></tr>';
// tabel.innerHTML = '<tr><td>4</td></tr>';
// tabel.innerHTML = '<tr><td>5</td></tr>';

// ---------- Menggunakan Pengulangan ----------

let tabel = document.querySelector("#tabel");
tabel.innerHTML = "<table> <thead><tr><th>Nomer</th></tr></thead><tbody>";

for (let index = 1; index < 8 ; index++) {
    tabel.innerHTML += "<tr><td>" + index + "</td></tr>";

}

tabel.innerHTML += "</tbody></table>";