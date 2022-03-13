const body = document.querySelector('body')
const sidebar = body.querySelector('nav')
const toggle = body.querySelector(".toggle")
const modeSwitch = body.querySelector(".toggle-switch")
const modeText = body.querySelector(".mode-text");

const toggleButton= body.querySelector(".toggle")
const configBtn = body.querySelector('#config-btn')

const configM = body.querySelector('#config-menu')

toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});

//*----------MENU----------------

const menu_btn = document.getElementById('icon-menu');

menu_btn.addEventListener("click" , () =>{
document.getElementById('menu-container').classList.toggle('container-close')
menu_btn.classList.toggle('menu-btn-open')
})





//*      -----------Config----------

configBtn.addEventListener("click" , () =>{
configM.classList.toggle('config');


})




