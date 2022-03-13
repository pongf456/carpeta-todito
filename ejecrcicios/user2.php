<?php
if($_POST){
    echo("ye");
    $dat = $_POST["hi"];
    echo($dat);
    file_put_contents("hoa.txt", "gola");
}
?>