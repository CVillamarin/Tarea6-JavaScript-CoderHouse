class Impresiones {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

const productos = [];
const elementosCarrito = [];
const contenedorProductos = 
    document.getElementById('contenedor-productos').getElementsByClassName('row');

const rowContenedorProductos = contenedorProductos[0];

const contenedorCarritoCompras = document.querySelector("#items")

cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();

function cargarProductos() {
    
    productos.push(new Impresiones("449583", 'Pastilleros',500, './imagenes/pastillero.jfif'));
    productos.push(new Impresiones("155368","Lapiceros",675,"./imagenes/lapiceros.jpg"));
    productos.push(new Impresiones("776493","LLaveros customisables",450,"./imagenes/llaveros.jpeg"));
    productos.push(new Impresiones("564436","Animales Articulados",600,"./imagenes/animales.webp"));
    productos.push(new Impresiones("629117","Macetas",740,"./imagenes/macetas.jfif"));
    productos.push(new Impresiones("849241","1 pieza de Lego",50,"./imagenes/lego.jpg"));
    productos.push(new Impresiones("254312","Varita Magica",750,"./imagenes/varitas.png"));
    productos.push(new Impresiones("948204","Modelo de autos",800,"./imagenes/auto.jfif"));

}

function cargarCarrito() {
    let elementoCarrito = new ElementoCarrito(
        new Impresiones("-","-","-"),
        0
    );
    elementosCarrito.push(elementoCarrito);
}

const guardarLocal=(clave,valor)=>{localStorage.setItem(clave,valor)};
guardarLocal("listaProductos",JSON.stringify(productos));

function dibujarCarrito(){
    let renglonesCarrito = '';

    elementosCarrito.forEach(
        (elemento) => {
            renglonesCarrito+=`
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>${elemento.cantidad}</td>
                    <td>$ ${elemento.producto.precio}</td>
                </tr>
            `;
        }
    );

    contenedorCarritoCompras.innerHTML = renglonesCarrito;
}


function crearCard(producto) {
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} ARS</p>
    `;
    cuerpoCarta.append(botonAgregar);

    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);

    botonAgregar.onclick = () => {

        let elementoCarrito = new ElementoCarrito(producto, 1);
        elementosCarrito.push(elementoCarrito);
        Swal.fire(
            'Producto fue agregado al carrito',
          )

        dibujarCarrito();

    } 
    return contenedorCarta;

}
function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            rowContenedorProductos.append(contenedorCarta);
        }
    );
}
function obtenerChiste(){
    const URLGET="https://api.chucknorris.io/jokes/random";
    fetch(URLGET)
        .then(resultado => resultado.json())
        .then(data => {
            console.log(data.value);
            data.forEach(data => {
                document.getElementById("data").innerHTML+=`
                    <tr>
                        <td>${data.value}</td>
                    </tr>
                `;
            });
        })
}
obtenerChiste();