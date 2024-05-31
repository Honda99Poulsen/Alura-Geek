import { ConexionApi } from "../controllers/conexionAPI.js";

export async function handleDelete(event) {
    const id = event.target.getAttribute('data-id');
    const confirmacion = confirm("¿Deseas eliminar este artículo?");
    
    if (confirmacion) {
       try {
          await ConexionApi.eliminarArticulo(id);
          event.target.closest('.card').remove();
       } catch (error) {
          console.error("Error al eliminar el producto:", error);
          alert("Hubo un problema al eliminar el producto. Inténtalo de nuevo más tarde.");
       }
    }
 }


