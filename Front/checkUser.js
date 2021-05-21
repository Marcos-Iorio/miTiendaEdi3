
function checkData(valor){
    document.getElementById("resultado").innerHTML = valor;
}

function iniciarSesion(servidor) {

    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();
    var data = new FormData();
    data.append("Mail", $("mailL").value);
    data.append("Contraseña", $('passL').value);

    // indico hacia donde va el mensaje
    xmlhttp.open("POST", servidor, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
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