let titleBot = document.querySelector('#input-addBot');
let linkBot = document.querySelector('#input-addBot1');
let imgBot = document.querySelector('#input-addBot2');
let descBot = document.querySelector('#input-descBot');
let addBot_btn = document.querySelector('.addBot-btn');
let statusText = document.querySelector('#status-text');
function addBot() {
  let frm = new FormData;
  frm.append("user", sessionStorage.getItem("user"))
  frm.append('imgBot', imgBot.value);
  frm.append('linkBot', linkBot.value);
  frm.append('titleBot', titleBot.value);
  frm.append('descBot', descBot.value);

  let previousBtnText = addBot_btn.innerText + ""

  addBot_btn.disabled = true;
  addBot_btn.innerText = "Sending..."

  fetch('php.php', {
    method: "POST",
    body: frm
  })
  .then(res => res.text())
  .then(re => {
    console.log(re)
    addBot_btn.innerText = "Done"
    setTimeout(() => {
      addBot_btn.disabled = false
      addBot_btn.innerText = previousBtnText
    }, 1000)
  })  
  .catch((err) => {
    console.error(err);
    setTimeout(() => {
      addBot_btn.disabled = false
      addBot_btn.innerText = previousBtnText
    }, 1000)
  });

}
addBot_btn.addEventListener('click', addBot);






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

const menu_btn = document.getElementById('menu-btn-container');

menu_btn.addEventListener("click" , () =>{
document.getElementById('menu-container').classList.toggle('container-close')
menu_btn.classList.toggle('menu-btn-open')
})






//*      -----------Config----------

configBtn.addEventListener("click" , () =>{
configM.classList.toggle('config');


})




