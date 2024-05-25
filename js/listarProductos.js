import { ConexionApi } from "./conexionAPI.js";

const cardContainer = document.querySelector("[data-card-container]");

export default function listarProductos (nombre,precio,imagen){

   const elementoCreado = document.createElement("div");

   elementoCreado.classList.add('card');

   elementoCreado.innerHTML = `
   <img class="img-card" src="${imagen}" alt="">
                        <h3 class="card-nombre">${nombre}</h3>
                        <section class="precio-icono">
                            <p class="card-precio">$ ${precio}</p>
                            <i><img class="logo-basurero"  src="img/🦆 icon _trash 2_.png" alt="icono de basurero"></i>
                        </section>
   `;

   return elementoCreado;

}

async function listarProductosPantalla(){

   const promeses = await ConexionApi.listarProductosApi();

   promeses.forEach( articulo => cardContainer.appendChild(listarProductos(articulo.nombre, articulo.precio, articulo.urlImagen)) );

}

 listarProductosPantalla();