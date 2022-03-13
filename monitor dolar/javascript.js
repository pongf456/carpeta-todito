var elbusca = document.querySelector('.texto');
var dolar = document.querySelector(".contend");
var dolarV = document.querySelector('#dolarV');
var euroV = document.querySelector("#euroV");
var dolarP = document.querySelector('#dolarP');
var dolarA = document.querySelector('#dolarA');
var tab = document.querySelector('.tab');
var busc = document.querySelector('.busc');
localStorage.setItem('Venezuela', "USD, EUR");
localStorage.setItem('Peru',"USD,");
localStorage.setItem('Argentina',"USD,");
//Buscador//
elbusca.addEventListener('keydown',(e)=>{
  if (e.key == 'Enter' && elbusca.style.top == 0) {
      dbs()
  }
})
function buscar(pais) {
if(localStorage.getItem(pais) != null)
{
    alert(`actualmente tenemos disponibles ${localStorage.getItem(pais)}`)
}
else {
    if ( pais[0] !== pais[0].toUpperCase())
    {
        alert("la primera letra del Pais debe ir Mayus")
    }
    else {
        alert("no se encontro la busqueda")
         }
    }
    }
function dbs () {buscar(tab.value)}
busc.addEventListener('click',dbs);
//Venezuela//
function Ven( ) {
    fetch('https://s3.amazonaws.com/dolartoday/data.json', {
        method : "GET",
        mode: 'cors',
    })
    .then(res => res.json())
    .then(re => {
var eur = re.EUR;
 var usd = re.USD;
 console.log(usd.promedio_real)
 console.log(eur.promedio_real)
 dolarV.innerHTML = `${usd.promedio_real}Bs`;
 euroV.innerHTML = `${eur.promedio_real}Bs`
 });
}
Ven();
setInterval(Ven,10000)
//Peru//
function Per() {
    fetch('https://deperu.com/api/rest/cotizaciondolar.json',{
method:'GET',
mode:'cors'
}).then(res => res.json())
 .then(re => {
    var compra = re.Cotizacion[0].Compra;
    var venta = re.Cotizacion[0].Venta;
    console.log("soles-usd " + compra)
    console.log(`usd-soles ${venta}`)
    dolarP.innerHTML = `${venta}S/`

 })
}
Per()
setInterval(Per,20000);
//Argentina//
function Arg() {
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales',{
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(re => {
        console.log(re[0].casa)
        var compra = re[0].casa.compra;
        var venta = re[0].casa.venta;
        dolarA.innerHTML = `${venta}$`
    })
}
Arg();
setInterval(Arg,10000);