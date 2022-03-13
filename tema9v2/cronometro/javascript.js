
window.onload = ()=> document.title = "Temporizador"
 var co = document.querySelector(".contar");
var num =  0;
var num1 = 0;
var ss = document.querySelector('.ss');
var sm = document.querySelector('.sm');
var sh = document.querySelector('.sh');
var se = document.querySelector('.se');
var num2 = 0;
var s;
var m;
var h;
var uno;
var dos;
var tres;
var cuat;
var anim = document.querySelector('.anim');
se.addEventListener('click',()=>{
s = ss.value;
m = sm.value;
h = sh.value;
s = parseInt(s);
m = parseInt(m);
h = parseInt(h);
document.querySelector(".s").innerHTML = s;
document.querySelector(".m").innerHTML =  m;
document.querySelector(".h").innerHTML = h;
return s, m ,h;

})

const seg = document.querySelector(".seg");
const minu = document.querySelector(".min");
const hor = document.querySelector (".hor");
const boton = document.querySelector(".boton");
const boton2 = document.querySelector(".boton2")
function temp () {
   if (s === num && m === num1 && h === num2) {alert("Llegamos hasta la hora indicada"); clearInterval(temp)}
}
setInterval (()=>{
if (s === num) document.querySelector(".s").style.color = "green"
if (m === num1) document.querySelector(".m").style.color = "green" 
if (h === num2) document.querySelector(".h").style.color = "green"   
},1000)
 function segundos () {
    num++;
    seg.innerHTML = num + " segundos";

}
function minutos () {
    if (num == 60) {
        num = 0;
        num1++;
        minu.innerHTML = num1 + " minutos";
    }
}
function horas () {
    if (num1 == 60) {
        num1 = 0;
        num2++;
        hor.innerHTML = num2 + " horas"
}
}
function empezar () {
 uno = setInterval(segundos,1000);
 dos =setInterval(minutos,1000);
 tres = setInterval(horas,1000);
  cuat = setInterval(temp,1000);
anim.style = "   animation-name: anim1;"
boton.removeEventListener ('click',empezar);
boton2.addEventListener ('click',terminar);
}
function terminar() {
clearInterval(uno);
clearInterval(dos);
clearInterval(tres);
clearInterval(cuat);
num = 0; seg.innerHTML = num;
num1 = 0; minu.innerHTML = num1;
num2 = 0; hor.innerHTML = num2;
anim.style = "";
s = NaN;
m = NaN;
h = NaN;
document.querySelector(".s").innerHTML = s;
document.querySelector(".m").innerHTML =  m;
document.querySelector(".h").innerHTML = h;
boton.addEventListener('click', empezar);
}
boton.addEventListener('click', empezar);
