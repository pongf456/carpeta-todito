<?php
echo ("<script>
var fora = new FormData()
fora.append('hi','hoa')
fetch('user2.php',{
    method: 'POST',
    body: fora
})</script>");
if($_POST) {
print("rasdasdadadadasssssssssssssssssssssssss");
}
function requit () {
    $url = "user2.php";
    $cone = curl_init();
    curl_setopt($cone, CURLOPT_HTTPGET, $url);

}
?>
<script>

</script>