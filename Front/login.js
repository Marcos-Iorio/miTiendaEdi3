function movimientoLogin(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}
//Movimiento del libro del fondo
function mouseMove(){
    var libro = document.getElementById("libroIcon");
    var moving = false;

    libro.addEventListener("mousedown", initialClick, false);

    function move(e){
        var newX = e.clientX - 10;
        var newY = e.clientY - 10;

        image.style.left = newX + "px";
        image.style.top = newY + "px";
    }

    function initialClick(e) {
        if(moving){
            document.removeEventListener("mousemove", move);
            moving = !moving;
            return;
        }
        
        moving = !moving;
        image = this;

        document.addEventListener("mousemove", move, false);
    }
}
$(document).ready(function(){
    $('#libroIcon').popover('show');
});
//popOver
function popover(){
    var libro = document.getElementById("libroIcon");
    libro.addEventListener('click',() =>{
        $('#libroIcon').popover('hide');
    });
}

function requerimientoPass(){
    $('#passwordRe').focusin(function(){
        $('#passRequire').removeClass('hidden');
        $('#passRequire').fadeIn(2000);
        
        
    })
    $('#passwordRe').focusout(function(){
        $('#passRequire').addClass('hidden');
        $('#passRequire').fadeOut(2000);
    })

}

function sendData(){
    let mail = document.getElementById('mailL').value;
    let pass = documnet.getElementById('passL').value;
    iniciarSesion("index.php/?mail="+mail+"&pass="+pass, checkData);
}

function checkData(valor){
    document.getElementById("resultado").innerHTML=valor;
}

function iniciarSesion(servidor, funcionARealizar) {

    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();

    // indico hacia donde va el mensaje
    xmlhttp.open("GET", servidor, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                funcionARealizar(xmlhttp.responseText);
            }
            else {
                alert("ocurrio un error");
            }
        }
    }

 
    //envio el mensaje    
    xmlhttp.send();
}


