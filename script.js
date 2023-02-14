const relogio = setInterval(function time() {
    var msg = window.document.getElementById('msg')
    var imagemvariavel = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    if (hora < 10) hora = "0" + hora 
    if (min < 10) min = "0" + min
    if (seg < 10) seg = "0" + seg


    msg.innerHTML = `${hora} : ${min} : ${seg} ` 
   
    
    if (hora >=0 && hora<12 ) {
        //Bom dia !!
        imagemvariavel.src = "m1.png"
        document.body.style.background = "#EEDDBB"
    }else if(hora>=12 && hora<18){
        //Boa tarde
        imagemvariavel.src = "t1.png"
        document.body.style.background = "#F7B368"
    }else{
        //Boa noite
        imagemvariavel.src = "n1.png"
        document.body.style.background = "#082A2A"
    }

})
