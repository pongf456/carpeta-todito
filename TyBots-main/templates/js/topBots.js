window.onload = () => {
    var bts = document.querySelector('.bts');
    fetch('addBot/bots.json',{
        method: "POST",
        headers: {
            "Accept": "application/json"
    }
    })
    .then(res => res.json())
    .then(re => {
        console.log(re)
        for(i in re){
            bts.innerHTML += `<tr class="bots"><td class="ndb">${re[i]['creador']}</td><td class="ndb">${re[i]['nombre']}</td><td class="ldb">${re[i]['descripcion']}</td><td class="fdb"><a href="${re[i]["link"]}" style = "transition: text-decoration 1s;">Go to pg</a></td><td><img src="${re[i]["imagen"]}" class="idb"></td></tr>`
        }
    });
}