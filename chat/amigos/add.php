<?php
if ($_POST){
    $user = $_POST["user"];
    $amigo = $_POST["amigo"];
    $data = file_get_contents("../data/users.json");
    $data = json_decode($data,true);
    if(array_key_exists($amigo, $data)){
        $arr = array(
            "nombre" => $amigo
        );
         $data[$user]["amigos"][] = $arr;
         $cod = json_encode($data,JSON_PRETTY_PRINT);
         file_put_contents("../data/users.json", $cod);
         print("true");
    }
    else{
    print("false");
    }
}
?>