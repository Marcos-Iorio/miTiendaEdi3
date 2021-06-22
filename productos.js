const RutaServer = "https://edi-iorio-back.herokuapp.com";


function cargarCategorias(valor) {
        try{
            var categorias = JSON.parse(valor);
        }
        catch(error){
            console.error("no es un JSON")
        }
    alert (categorias);
    categorias.sort(function (x, y) { return x.categoria.localeCompare(y.categoria) });
    var opciones = ['<option value=0>Seleccione una categoria</option>']

    provincias.forEach(element => {
        opciones.push('<option value="' + element.categoria + '</option>');
    });

    document.getElementById('categoria').innerHTML = opciones;
}

/* function cargarProductos(valor) {
    var productos = JSON.parse(valor);
    productos.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
    var opciones = []

    productos.forEach(element => {
        opciones.push('<td value="' + element.nombre + element.precio + element.categoria + element.stock + '</td>');
    });
    document.getElementById('productos').innerHTML = opciones;
} */

function enviarMensajeAlServidor(RutaServer, funcionARealizar) {
    datos ="/productos";
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
                funcionARealizar(cargarCategorias , xmlhttp.responseText);
            }
            else {
                alert("ocurrio un error");
            }
        }
    }

    xmlhttp.setRequestHeader('enctype', 'multipart/form-data');
    //envio el mensaje    
    var obje = new FormData();
    //envio el mensaje    
    xmlhttp.send();

}   