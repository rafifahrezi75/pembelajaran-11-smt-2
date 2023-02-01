// let url1 = "http://localhost/pembelajaran-11-smt-2/ajax/ajax.php";

// $(document).ready(function () {
//     function getData() {
//         $.ajax({
//             type: "get",
//             url: url1,
//             dataType: "json",
//             success: function (response) {
//                 console.log(response);
//                 let out = "";
//                 $.each(response, function (key, val) {
//                     out += `<tr>
//                         <td>${val.idbuah}</td>
//                         <td>${val.buah}</td>
//                         <td>${val.deskripsi}</td>
//                         <td>${val.harga}</td>
//                         <td>${val.gambar}</td>
//                     </tr>`;
//                 });
//                 $("#isi").html(out);
//             }
//         });
//     }
//     getData();
// });

let url = "https://dummyjson.com/products/search?q=Laptop";

$(document).ready(function () {
    let out = "";
    function getData() {
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response);
                response.products.forEach(el => {
                    out += `<tr>
                    <td>${el.title}</td>
                    <td>${el.description}</td>
                    </tr>`;
                });
                // $.each(response.products, function (key, val) {
                //     out += `<tr>
                //     <td>${val.title}</td>
                //     <td>${val.description}</td>
                //     </tr>`;
                // });
                $("#dummyjson").html(out);
            }
        });
    }
    getData();
});