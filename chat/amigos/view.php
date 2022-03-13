<?php
if($_POST){
    $nombre = $_POST["nombre"];
    $file = file_get_contents("../data/users.json");
    $fole = json_decode($file,true);
    if(array_key_exists($nombre, $fole)) {
        $img = $fole[$nombre]["foto"];
        $arr = array(
            "confirm" => "true",
            "nombre" => $nombre,
            "foto" => "$img"
        );
        $cod = json_encode($arr,JSON_PRETTY_PRINT);
        print_r($cod);
    }
    else{
        $arr = array(
            "confirm" => "false",
        );
        $cod = json_encode($arr,JSON_PRETTY_PRINT);
        print_r($cod);
    }
}
?>