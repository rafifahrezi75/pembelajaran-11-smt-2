<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "dbbuah";

$koneksi = mysqli_connect($host,$user,$password,$db);

$sql = "SELECT * FROM tblbuah";
$result = mysqli_query($koneksi,$sql);

if (mysqli_num_rows($result) > 0 ) {
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[]=$row;
    }
}

echo json_encode($data);

// print_r($result);

?>