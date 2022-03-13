<?php
if ($_POST){
    $user = $_POST["user"];
    $titleBot = $_POST["titleBot"];
    $descBot = $_POST["descBot"];
    $linkBot = $_POST["linkBot"];
    $imgBot = $_POST["imgBot"];
    if (preg_match('/[!"#$%&(){}+.,]/', $titleBot) == 1) {
        print("ci");
    } else {
        $expr = "/$titleBot /";
        if  (false) {
            print("false");
        }
        
        else {
            $dus = json_decode( file_get_contents('../../users/user.json'), true);
            $dcd = json_decode( file_get_contents('bots.json'), true);
            $env = array(
                "creador" => $user,
                "nombre"=> $titleBot,
                "descripcion" => $descBot,
                "link" => $linkBot,
                "imagen" => $imgBot
            );
            $dus[$user]["bots"][$titleBot] = $env;
            $dcd[$titleBot] = $env;
            file_put_contents('bots.json', json_encode($dcd, JSON_PRETTY_PRINT));
            file_put_contents('../../users/user.json', json_encode($dus, JSON_PRETTY_PRINT));
            print("true");
        }
    }
}
?>