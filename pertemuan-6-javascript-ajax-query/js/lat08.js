let url = "http://localhost/pembelajaran-11-smt-2/ajax/ajax.php";

$(document).ready(function () {
    function getData() {
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response);
                let out = "";
                $.each(response, function (key, val) { 
                    out += `<tr>
                        <td>${val.idbuah}</td>
                        <td>${val.buah}</td>
                        <td>${val.deskripsi}</td>
                        <td>${val.harga}</td>
                        <td>${val.gambar}</td>
                    </tr>`;
                });
                $("#isi").html(out);
            }
        });
    }
    getData();
});