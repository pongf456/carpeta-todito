var msj = document.querySelector('.mae');
        if (localStorage.getItem('name') == null) {
            const name = prompt('como sera tu nombre en este chat');
            localStorage.setItem('name',name);
        }

        var mensajes = document.querySelector('.mensajes');
        var bajoa = document.querySelector('#uno');

         
        function borrar () {
            msj.value = ""
            console.log(mensajes.scrollTop)
            
        }
         msj.addEventListener('keydown',function entr (e){
            if (e.code == 'Enter') {
               enviar()
               msj.removeEventListener('keydown', entr);
               setTimeout(() => {
                   msj.addEventListener('keydown',entr)
               },2000);
            }
        })
        function request () {
        fetch('translate.php',{
            method:"POST"
        })
        .then(res => res.text())
        .then(re => {
            document.querySelector('.mensajes').innerHTML = `<p>${re}</p>`
        });
        //menciones
        fetch('menciones/menciones.txt')
        .then(res => res.text())
        .then(async re => {
            var n = localStorage.getItem('name');
             if(re.indexOf(n) != -1) {
                alert("te mencionaron");
                return;
            }
        })
        }
        request()
        setInterval (request,2000)
        function enviar () {
    
                if (msj.value != "") {
                    //rename
                    if (msj.value == "/rename" ) {
                        const name = prompt('como sera tu nombre en este chat');
                    localStorage.setItem('name',name);
                    }
                    //mencion
                    if (msj.value == '@') {
                     var mencion = prompt('A quien vas a mencionar?')
                      if (mencion != undefined) {
                          var mn = new FormData;
                          mn.append('mencion', mencion);
                          fetch('menciones/mencion.php',{
                              method:'Post',
                              body: mn
                          })
                          .then(res => res.text())
                          .then(re => console.log(re))
                          msj.value = `@${mencion}`
                      }
                    }
                    //enviar
                 form = new FormData();
                 mensajes.scroll(0, 10000000000000000)
                 form.append('mensaje', msj.value);
                 form.append('usuario', localStorage.getItem('name'));
                 fetch('php.php',{
                     method: 'POST',
                     body: form,
                     
                 })
                 .then(res => res.text()) 
                 .then(re => console.log(re))
                 request()  
                 msj.value = ""     ;
                 env.removeEventListener('click',enviar);
                 setTimeout(()=>{
                     env.addEventListener('click',enviar)
                 },2000)
                }
                else {
                    msj.placeholder = 'Completa el campo'
                    setTimeout(()=>{
                        msj.placeholder = 'Enviar mensaje'
                    },1000)
                }
    
        }
        var env = document.querySelector('.enviar');
        env.addEventListener('click',enviar);
