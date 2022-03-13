var msj = document.querySelector('.mae');


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
        fetch('chats/translate.php',{
            method:"POST"
        })
        .then(res => res.text())
        .then(re => {
            document.querySelector('.mensajes').innerHTML = `${re}`
        });
        }
        request()
        setInterval (request,2000)
        function enviar () {
    
                if (msj.value != "" && msj.value != '<') {

                    //enviar
                 form = new FormData();
                 mensajes.scroll(0, 10000000000000000)
                 form.append('mensaje', msj.value);
                 form.append('usuario', sessionStorage.getItem('user'));
                 fetch('chats/php.php',{
                     method: 'POST',
                     body: form,
                     
                 })
                 .then(res => res.text()) 
                 request()  
                 
                 msj.value = ""     ;
                 env.removeEventListener('click',enviar);
                 msj.style.borderColor = 'green'
                 setTimeout(()=>{
                    msj.style.borderColor = 'black'
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
