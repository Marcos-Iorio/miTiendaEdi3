const RutaServer = "http://localhost:8080";

function checkData(valor){
    document.getElementById("resultado").innerHTML = valor;
}



function iniciarSesion() {
    datos ="/login" + "/" + document.getElementById('nameL').value + "/" + document.getElementById('passL').value;
    console.log(datos);
    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();
   /*  var data = new FormData();
    data.append("Nombre", $("nameL").value);
    data.append("Contraseña", $('passL').value); */
    

    // indico hacia donde va el mensaje
    xmlhttp.open("GET", RutaServer  + datos, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
                document.getElementById("resultado").innerHTML = xmlhttp.responseText;
            }
            else {
                alert("ocurrio un error");
            }
        }
    }
    /* xmlhttp.setRequestHeader('enctype', 'multipart/form-data'); */
    //envio el mensaje    
    xmlhttp.send();
}