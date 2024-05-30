


async function listarProductosApi() {

try {
    
    const url = `http://localhost:3000/productos`

    let conexion = await fetch(url, {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    let conexionConvertida = await conexion.json();

    return conexionConvertida;

} catch (error) {
    console.log(error);
}

}


async function crearArticuloProducto(nombre, precio, urlImagen ){

    try {
        
        const url = `http://localhost:3000/productos`

        const conexion = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                nombre:nombre,
                precio:precio,
                urlImagen:urlImagen,
                
        })
        });

        const conexionConvertida = await conexion.json();

        return conexionConvertida;

    } catch (error) {
        console.log(error);
    }

}

async function eliminarArticulo(idProducto) {
    try {
        const conexion = await fetch(`http://localhost:3000/productos/${idProducto}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!conexion.ok) {
            throw new Error(`Error al eliminar el artículo con id ${idProducto}: ${conexion.statusText}`);
        }

        return conexion;

    } catch (error) {
        console.log('Error:', error);
        throw error; // Re-lanza el error para que el llamador pueda manejarlo si es necesario
    }
}


export const ConexionApi={
    listarProductosApi, crearArticuloProducto, eliminarArticulo
}

