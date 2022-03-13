<?php
if ($_POST){
    $titleBot = $_POST["titleBot"];
    $descBot = $_POST["descBot"];
    $bs = file_get_contents('names.txt');

    if (preg_match('/[!"#$%&(){}+.,]/', $titleBot) == 1) {
        print("ci");
    } else {
        $expr = "/$titleBot /";
        if  (preg_match($expr, $bs) == 1) {
            print("false");
        }
        else {
            $nm = fopen('names.txt', "a+");

            $env = array(
                "nombre"=> $titleBot,
                "descripcion" => $descBot
            );
            $enc = json_encode($env);
            fwrite($nm, "$enc".PHP_EOL);
            print("true");
        }
    }
}
?>