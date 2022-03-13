<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/stylesR.css">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
  </head>
  <body>


    <h1>TyBots register</h1>

    <div class="container">
      <div class="wrapper">
        <div class="title"><span>Register</span></div>
        <form action="index.php" method="get">
            <div class="row">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="User-name" required name="user">
              </div>
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Email" required name="email">
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required name="password">
          </div>
          <div class="pass"><a href="#">Forgot password?</a></div>
          <div class="row button">
            <input type="submit" value="Login">
          </div>
          <div class="signup-link">You're already registed? <a href="login.php">Sign-up</a></div>
        </form>
      </div>
    </div>

  </body>
</html>
<?php
if($_GET){
    $user = $_GET['user'];
    $password = $_GET['password'];
    $email = $_GET['email'];
    $fe = file_get_contents('users/user.json');
    $dcd = json_decode($fe, true);
    if (array_key_exists($user, $dcd) == false) {
      $dcd[$user] = array(
        "user" => $user,
        "password" => $password,
        "email" => $email,
        "id" => "#".rand( 1000, 10000000)
      );
      $cod = json_encode($dcd ,JSON_PRETTY_PRINT);
      file_put_contents('users/user.json', $cod);
      echo'<script type="text/javascript">
      alert("Usuario registrado");
      </script>';
    }
    else {
      echo'<script type="text/javascript">
    alert("Nombre de usuario ya elegido");
    window.location.href="index.php";
    </script>';
    }

}

?>