import { ConexionApi } from "../controllers/conexionAPI.js";

const cardContainer = document.querySelector("[data-card-container]");

export default function listarProductos (nombre,precio,imagen,id){

   const elementoCreado = document.createElement("div");

   elementoCreado.classList.add('card');

   elementoCreado.innerHTML = `
   <img class="img-card" src="${imagen}" alt="">
                        <h3 class="card-nombre">${nombre}</h3>
                        <div class="precio-icono">
                            <p class="card-precio">$ ${precio}</p>
                            <button class="basurero" data-id="${id}" >🗑️</button>
                        </div>
   `;

   return elementoCreado;

}

async function listarProductosPantalla(){

   const promeses = await ConexionApi.listarProductosApi();

   promeses.forEach( articulo => 
      cardContainer.appendChild(
         listarProductos(
            articulo.nombre, 
            articulo.precio, 
            articulo.urlImagen, 
            articulo.id)) );

}

 listarProductosPantalla();