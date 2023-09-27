export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos) 
    })

    const data = await response.json()
    return data;
}

export const actualizarPublicacion = async (id) => {
    const response = await fetch('editar');
    const publicaciones = await response.json();
    return publicaciones  
}


// FUNCIONES PARA MOSTRAR DATOS
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(pub => {
        registros += `
            <tr>
                <td> 
                    <img src="${pub.url_imagen}" style="border-radius:50%; height:60px; width: 60px">
                </td>
                <td>${pub.titulo}</td>
                <td>${pub.detalle}</td>
                <td>${ (pub.fecha_publicacion)}</td>
                <td>${pub.nombre_autor}</td>
                <td>
                    <a href="/editar/${pub.id}" class="btn btn-primary">Editar</a>
                    <button class="btn btn-danger btn-sm btn-eliminar" onclick=deletePost(${pub.id}) id="${pub.id}">Eliminar</button>
                </td>
            </tr>
        `
    });

    elemento.innerHTML = registros
}

//Eliminar una publicación
const deletePost = async (id) => {
    // Se envía la petición al servidor
    const response = await fetch('/eliminar/${id}', {
        method: 'delete'
    })

    const data = await response.json();
    alert(data.msg)
    location.reload();
}

export const obtenerPublicaciones = async ( ) => {
    // Consulta al servidor por los datos de publicaciones
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}