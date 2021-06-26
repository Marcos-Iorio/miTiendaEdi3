const RutaServer = "https://edi-iorio-back.herokuapp.com";

function iniciarSesion(){
    enviarMensajeAlServidor(RutaServer);
}

function enviarMensajeAlServidor(RutaServer) {
    datos ="/login/";
    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();

    // indico hacia donde va el mensaje
    xmlhttp.open("POST", RutaServer + datos, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
              /*   funcionARealizar(xmlhttp.responseText); */
                document.getElementById("login").innerHTML = xmlhttp.responseText;
                window.location.href = "productos.html";
            }
            else {
                alert("ocurrio un error");
            }
        }
    }

    xmlhttp.setRequestHeader('enctype', 'multipart/form-data');
    //envio el mensaje    
    var obje = new FormData();
    obje.append("Nombre", document.getElementById("nameL").value);
    obje.append("Contraseña", document.getElementById('passL').value); 
    //envio el mensaje    
    xmlhttp.send(obje);
}   

function registro(){
    enviarRegistro(RutaServer);
}

function enviarRegistro(RutaServer) {
    datos ="/registro/"
    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();

    // indico hacia donde va el mensaje
    xmlhttp.open("POST", RutaServer + datos, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
              /*   funcionARealizar(xmlhttp.responseText); */
                document.getElementById("registro").innerHTML = xmlhttp.responseText;
            }
            else {
                alert("ocurrio un error");
            }
        }
    }

    xmlhttp.setRequestHeader('enctype', 'multipart/form-data');
    //envio el mensaje    
    var obje = new FormData();
    obje.append("Nombre", document.getElementById("username").value);
    obje.append("Contraseña", document.getElementById('passwordRe').value);
    obje.append("Mail", document.getElementById('mail').value);
    //envio el mensaje    
    xmlhttp.send(obje);

} 