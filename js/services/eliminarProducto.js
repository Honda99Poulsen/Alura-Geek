import { ConexionApi } from "../controllers/conexionAPI.js";


document.addEventListener('DOMContentLoaded', () =>{
    requestAnimationFrame(() => {
        const botones = document.querySelectorAll('[data-id]');
        
        botones.forEach( (boton) => {
            boton.addEventListener("click",  () => {
                const id = boton.attributes[1].value;
                // console.log(`id ${id}`);

                 ConexionApi.eliminarArticulo(id);

            })
        } )

    });
});



