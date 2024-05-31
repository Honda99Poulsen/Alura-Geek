


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

        const conexion = await fetch(`http://localhost:3000/productos/${idProducto}`, {
            method: `DELETE`
        });

        if (!conexion.ok) {
            throw new Error(`Error al eliminar el artículo con id ${idProducto}: ${conexion.statusText}`);
        }

}


export const ConexionApi={
    listarProductosApi, crearArticuloProducto, eliminarArticulo
}

