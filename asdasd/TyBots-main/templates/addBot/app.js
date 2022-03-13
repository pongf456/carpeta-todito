let titleBot = document.querySelector('#input-addBot');
let descBot = document.querySelector('#input-descBot');
let addBot_btn = document.querySelector('.addBot-btn');
let statusText = document.querySelector('#status-text');
function addBot() {
  let frm = new FormData;
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
   setTimeout(() => {
    addBot_btn.disabled = false
    addBot_btn.innerText = previousBtnText
  }, 1000)
    addBot_btn.innerText = "Done"
  
  })

}
addBot_btn.addEventListener('click', addBot);








//!------------NAV-BAR--------------------------------
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});


//? -----------CONFIG-ICON---------------
const config_btn = document.getElementById("config-btn");
const div_config = document.getElementById("config-id");

config_btn.addEventListener("click", toggleConfig()) ;
function toggleConfig(){
         div_config.classList.toggle("active-menu")   ;

  }
