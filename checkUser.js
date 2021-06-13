const RutaServer = "https://edi-iorio-back.herokuapp.com/"

function checkData(valor){
    document.getElementById("resultado").innerHTML = valor;
}

function iniciarSesion(rutaServer) {

    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();
    var data = new FormData();
    data.append("Nombre", $("nameL").value);
    data.append("Contraseña", $('passL').value);

    // indico hacia donde va el mensaje
    xmlhttp.open("POST", RutaServer + rutaServer, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
                alert("Datos correctos!");
            }
            else {
                alert("ocurrio un error");
            }
        }
    }
    xmlhttp.setRequestHeader('enctype', 'multipart/form-data');
    //envio el mensaje    
    xmlhttp.send(data);
}