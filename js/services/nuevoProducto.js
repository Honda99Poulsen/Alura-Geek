import { ConexionApi } from "../controllers/conexionAPI.js";


const formulario = document.querySelector("[data-form]");

async function crearNuevoProducto(evento){

    const valorNombre = document.querySelector("[data-nombre]").value;
    const valorPrecio = document.querySelector("[data-precio]").value;
    const valorUrlImagen = document.querySelector("[data-imagen]").value;

    const urlPattern = new RegExp('^(https?:\\/\\/)?' + 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + 
        '((\\d{1,3}\\.){3}\\d{1,3}))' + 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
        '(\\?[;&a-z\\d%_.~+=-]*)?' + 
        '(\\#[-a-z\\d_]*)?$', 'i'); 

        if(urlPattern.test(valorUrlImagen)) {
            alert('URL valida');
        }else{
            alert('URL invalida');
        }


    await ConexionApi.crearArticuloProducto(valorNombre, valorPrecio, valorUrlImagen);

}

formulario.addEventListener("submit", ( evento ) => {
    evento.preventDefault()

        crearNuevoProducto()
    
})



