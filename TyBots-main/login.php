<!DOCTYPE html>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/stylesL.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
   <title>TyBots login</title>
  </head>



  <body>

    <div class="container">
      <div class="wrapper">
        <div class="title"><span>Login</span></div>
        <form action="login.php" method="get">
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="User" required name="user">
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required name="password">
          </div>
          <div class="pass"><a href="#">Forgot password?</a></div>
          <div class="row button">
            <input type="submit" value="Login">
          </div>
          <div class="signup-link">Not a member? <a href="index.php">Signup now</a></div>
        </form>
      </div>
    </div>

  </body>
</html>
<?php
if($_GET){
    $user = $_GET['user'];
    $fe = file_get_contents('users/user.json');
    $dcd = json_decode($fe, true);
    $password = $_GET['password'];
    if (array_key_exists($user, $dcd) == true) {
    if (array_search($password, $dcd[$user]) != false) {
      echo"<script type='text/javascript'>
      sessionStorage.setItem('user', '$user')
            window.location.href='templates/index.html';
      </script>";
    }
    else {
      echo'<script type="text/javascript">
      alert("Clave invalida");
      window.location.href="login.php";
      </script>';
    }
    }
    else {
      echo'<script type="text/javascript">
    alert("usuario invalido");
    window.location.href="login.php";
    </script>';
    }

}

?>