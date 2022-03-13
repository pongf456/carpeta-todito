var register = document.querySelector('.register');
var login = document.querySelector('.login');
var userr = document.querySelector('.register-user');
var page = document.querySelector('.page');
var paswordr = document.querySelector('.register-pasword');
var submitr = document.querySelector('.register-submit');
var userl = document.querySelector('.login-user');
var paswordl = document.querySelector('.login-pasword');
var submitl = document.querySelector('.login-submit');
var cambioReg = document.querySelector('.selection-register');
var cambioLog = document.querySelector('.selection-login');

function enviarre() {
if (localStorage.getItem("user") == userr.value && localStorage.getItem('pasword') == paswordr.value) {
    alert("usted ya esta registrado")
}
else { 
 if (userr.value.length >= 2 &&  userr.value.length <= 7) {
 if (paswordr.value.length >= 2 && paswordr.value.length <= 7 ) {
 localStorage.setItem("user",userr.value);
 localStorage.setItem("pasword", paswordr.value);
  document.querySelector('.confirm').style.display = "inline-block";
  document.querySelector('.confirm').style.opacity = "1";
  setTimeout(()=>{
  document.querySelector('.confirm').style.opacity = 0;
  setTimeout (()=>{
    document.querySelector('.confirm').style.display = "none";
},2000)
  },800)
 }
 else alert("contraseña de usuario, minimo 2 caracteres, maximo 7")
 }
 else alert("nombre de usuario, minimo 2 caracteres, maximo 7");
}
}
submitr.addEventListener('click',enviarre);

function enviarlo() {
if (localStorage.getItem("user") != undefined && localStorage.getItem("pasword") != undefined) {
if (userl.value == localStorage.getItem("user")) {
if (paswordl.value == localStorage.getItem("pasword")) {
 page.style.display = "none";
 
 setTimeout(()=>{

    document.querySelector(".dasboard").style.display = "inline-block"


},1000)
  
 
}
else alert ("contraseña incorrecta")
}
else alert ("usuario incorrecto")
}
else alert("No esta registrado, vaya al apartado de registro")
}


function regist() {
 register.style.display = "inline-block"
 login.style.display = "none"
cambioReg.style.backgroundColor = "#2074DA"
cambioReg.style.color = "white"
cambioLog.style.backgroundColor = "#A5C6FF"
cambioLog.style.color = "black"
}
function log () {
    register.style.display = "none"
    login.style.display = "inline-block"
    cambioLog.style.backgroundColor = "#2074DA"
cambioLog.style.color = "white"
cambioReg.style.backgroundColor = "#A5C6FF"
cambioReg.style.color = "black"
}
cambioReg.addEventListener('click',regist);
cambioLog.addEventListener('click',log);
submitl.addEventListener('click', enviarlo);
var proI = document.querySelector(".pro-i");
var proC = document.querySelector(".pro-c");
var cont = 1;
var interval1;
function ini () {
    proI.removeEventListener('click',ini);
    proC.addEventListener('click',cer);
    if (localStorage.getItem('progreso') != undefined) {
        cont = localStorage.getItem('progreso');
    }
    interval1 = setInterval(()=>{
        if (cont >= 100) {
         clearInterval(interval1);
         alert("progreso terminado, eliminando cuenta");
         localStorage.removeItem("user");
         localStorage.removeItem("pasword");
         localStorage.removeItem("progreso");
         setTimeout(()=> location.reload(),1000)
        }
       else { 
        cont++
        console.log (cont);
        document.querySelector('.pr-porcen').style.width = cont + "%"
            }
    },1000)
}
function cer() {
 clearInterval(interval1);
 alert("guardando progreso")
 localStorage.setItem ("progreso",cont);
 proI.addEventListener('click', ini);
}
proI.addEventListener('click', ini);



