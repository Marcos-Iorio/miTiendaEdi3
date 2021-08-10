const RutaServer = "https://edi-iorio-back.herokuapp.com";

function enviarCategorias(){
    categorias("https://edi-iorio-back.herokuapp.com/productos", cargarCategorias);
}


function cargarCategorias(valor) {

    var categorias = JSON.parse(valor);
    categorias.sort(function (x, y) { return x.nombre_cat.localeCompare(y.nombre_cat) });
    var opciones = ['<option value="0">Seleccione una categoria</option>']

    categorias.forEach(element => {
        opciones.push('<option value="' + element.nombre_cat + '">' + element.nombre_cat + '</option>');
    });

    document.getElementById('categoria').innerHTML = opciones;
}


function categorias(RutaServer, funcionARealizar) {
    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();

    // indico hacia donde va el mensaje
    xmlhttp.open("GET", RutaServer, true);
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
    xmlhttp.send();
}   

function enviarProductos(){
    productos("https://edi-iorio-back.herokuapp.com/productos/todos", cargarProductos);
}

function cargarProductos(valor){
    var productos = JSON.parse(valor);
    var col = [];

    for (var i = 0; i < productos.length; i++) {
        for (var key in productos[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }   

    var table = document.createElement("table");
    table.className+=("table");
    table.className+=("table");
    table.className+=("table-bordered ");
    table.className+=("table-hover ");
    table.className+=("table-striped ");
    var thead = document.createElement("thead");
    thead.className+=("thead-dark");
    table.appendChild(thead);
    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
        thead.appendChild(tr);
    }


    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    var tr2 =table.insertRow(-1);

    for (var i = 0; i < productos.length; i++) {
        tr2 = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr2.insertCell(-1);
            tabCell.innerHTML = productos[i][col[j]];
        }
        tbody.appendChild(tr2);
    }

    var divContainer = document.getElementById("mostrar-tabla");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}


function productos(RutaServer, funcionARealizar) {
    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();

    // indico hacia donde va el mensaje
    xmlhttp.open("GET", RutaServer, true);
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
    xmlhttp.send();
}

let seleccion = document.querySelector('#categoria')
console.log(seleccion);

seleccion.addEventListener('change', () => {
    const RutaServer = "https://edi-iorio-back.herokuapp.com/productos/prodCat";
    retornarCategoria(RutaServer, cargarProductos);
});

function actualizar(){
    const RutaServer = "https://edi-iorio-back.herokuapp.com/productos/prodCat";
    retornarCategoria(RutaServer, cargarProductos);
}

function retornarCategoria(RutaServer, funcionARealizar){
    var xmlhttp = new XMLHttpRequest();

    // indico hacia donde va el mensaje
    xmlhttp.open("POST", RutaServer, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                funcionARealizar(xmlhttp.responseText)
            }
            else {
                alert("ocurrio un error");
            }
        }
    }
    xmlhttp.setRequestHeader('enctype', 'multipart/form-data');
    //envio el mensaje    
    var obje = new FormData();
    obje.append("Categoria", document.getElementById("categoria").value);
    //envio el mensaje    
    xmlhttp.send(obje);

}

/* setInterval(actualizar, 500); */