var link1 = document.querySelector('.li1');
var link2 = document.querySelector('.li2');
var link3 = document.querySelector('.li3');
var sect1 = document.querySelector('.sect-1');
var sect2 = document.querySelector('.sect-2');
var sect3 = document.querySelector('.sect-3');
link1.addEventListener('click',(e)=>{
e.preventDefault()
sect1.scrollIntoView({behavior: "smooth"});
})

link2.addEventListener('click',(e)=>{
    e.preventDefault()
    sect2.scrollIntoView({behavior: "smooth"});
    })
link3.addEventListener('click',(e)=>{
        e.preventDefault()
        sect3.scrollIntoView({behavior: "smooth"});
        })
window.onload = function req () {
    if (localStorage.getItem('visitado') != undefined)
    {
        var data = new FormData();
        data.append('vista', 0);
      fetch('php.php',{
          method:"POST",
          body: data
      })
      .then(res => res.text())
      .then(re => {
        var visit = document.querySelector('.visits');
        visit.innerHTML = `Visitas || ${re} ||`; 
      })
    }
    else {
    localStorage.setItem('visitado', true);
    var data = new FormData();
    data.append('vista', 1);
fetch('php.php',{
    method: 'POST',
    body: data
})
.then(res => res.text())
.then(re => {
    var visit = document.querySelector('.visits');
    visit.innerHTML = `Visitas || ${re} ||`; 
})
}
}