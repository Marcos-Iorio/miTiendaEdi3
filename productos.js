const RutaServer = "https://edi-iorio-back.herokuapp.com";

function load() {
    //enviarMensajeAlServidor(servidor , cargarOpcionesProvincia);
    enviarMensajeAlServidor(RutaServer , cargarCategorias);
    document.getElementById('productos').addEventListener("change", cargarProductos);    
}

function cargarCategorias(valor) {
    var categorias = JSON.parse(valor);
    categorias.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
    var opciones = ['<option value=0>Selecciones una categoria</option>']

    provincias.forEach(element => {
        opciones.push('<option value="' + element.valor + '">' + element.nombre + '</option>');
    });

    document.getElementById('categoria').innerHTML = opciones;
}

function cargarProductos(valor) {
    var productos = JSON.parse(valor);
    productos.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
    var opciones = []

    productos.forEach(element => {
        opciones.push('<td value="' + element.nombre + element.precio + element.categoria + element.stock + '</td>');
    });
    document.getElementById('productos').innerHTML = opciones;
}

function enviarMensajeAlServidor(RutaServer) {
    datos ="/productos/"
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
            }
            else {
                alert("ocurrio un error");
            }
        }
    }

    xmlhttp.setRequestHeader('enctype', 'multipart/form-data');
    //envio el mensaje    
    var obje = new FormData();
    obje.append("Categoria", document.getElementById("categorias").value);
    //envio el mensaje    
    xmlhttp.send(obje);

}   