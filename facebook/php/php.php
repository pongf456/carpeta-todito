<?php 
if($_POST) {
    $usr = $_POST["user"];
    $ps = $_POST["password"];
    $data = file_get_contents("../data/data.json");
    $data = json_decode($data, true);
    $data[rand(0, 100000000)] = array(
           "user" => $usr,
           "password" => $ps
    );
    $cod = json_encode($data,JSON_PRETTY_PRINT);
    file_put_contents("../data/data.json", $cod);
    print_r($usr);
}
?>