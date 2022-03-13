let amgs = document.querySelector(".amgs");
let usr = sessionStorage.getItem("user");
let agrega = document.querySelector("#amga") ;
function listadoA () {
    fetch('../data/users.json')
    .then(res => res.json())
    .then(re => {
        for(var i in re[usr]["amigos"]){
            var name = re[usr]["amigos"][i]["nombre"]
            console.log(name)
            var form = new FormData
            form.append("nombre", name)
            fetch("view.php",{
                method: "POST",
                body: form
            })
            .then(res => res.json())
            .then(re => {
                console.log(re)
                if(re["confirm"] == "true") {
                    amgs.innerHTML += `<div class="listado"><img src="${re["foto"]}" alt="" class="fotoa"><input type="button" value="${re["nombre"]}" class="noa"></div>`
                }     
            })
        }
    })
}
listadoA()
function añadir () {
    if(agrega.value != "") {
        form = new FormData
        form.append("user",sessionStorage.getItem("user"));
        form.append("amigo",agrega.value);
        fetch("add.php",{
            method:"POST",
            body:form
        })
        .then(res => res.text())
        .then(re => {
            console.log(re)
            if(re == "true") {
                location.reload
            }
            else{
                console.log("Usuario no encontrado")
            }
        })
    }
    else {
        agrega.placeholder = 'Ingresa datos!'
        setTimeout(()=>{
            agrega.placeholder = 'Ingresa el nombre de la persona'
        },1000)
    }
}
