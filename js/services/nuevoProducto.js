import { ConexionApi } from "../controllers/conexionAPI.js";


const formulario = document.querySelector("[data-form]");

async function crearNuevoProducto(){

    const valorNombre = document.querySelector("[data-nombre]").value;
    const valorPrecio = document.querySelector("[data-precio]").value;
    const valorUrlImagen = document.querySelector("[data-imagen]").value;

    await ConexionApi.crearArticuloProducto(valorNombre, valorPrecio, valorUrlImagen);

}

formulario.addEventListener("submit", ( evento ) => {
    evento.preventDefault()
    crearNuevoProducto()
})

