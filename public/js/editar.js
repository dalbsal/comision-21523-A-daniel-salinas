//import { obtenerPublicaciones } from './crud-post.js';

//Obtenemos la publicación
const obtenerPublicacion = async (id) => {
    
    const response = await fetch(`/editar/${id}`)
    
    const data = await response.json()

    console.log(data)

    alert(data.body);
    return data;
} 

// Referencia al elemento de formulario html
const formEditar = document.querySelector("#form-editar")

// Se obtiene el id de la publicación a editar
const id = formEditar.dataset.id

// Cuando se carga el contenido del html y recursos estáticos, se solicita la publicación y se muestran en el formulario
document.addEventListener('DOMContentLoaded', async () => {
        
    // Se obtiene la publicación
    const publicacion = await obtenerPublicacion(id)

    console.log("Paso el obtener")

    // Referencia a los elementos del formulario
    const titulo = document.querySelector('#titulo')
    const detalle = document.querySelector('#detalle')
    const url_imagen = document.querySelector('#url_imagen')
    const fecha_publicacion = document.querySelector('#fecha_publicacion')
    const nombre_autor = document.querySelector('#nombre_autor')

    // Los Valores obtenidos se asignan a los campos del formulario
    titulo.value = publicacion.titulo;
    detalle.value = publicacion.detalle;
    url_imagen.value = publicacion.url_imagen;
    fecha_publicacion.value = new Date(publicacion.fecha_publicacion).toISOString().split('T')[0];
    nombre_autor.value = publicacion.nombre_autor;

    console.log("2.1 - " . titulo.value);
})


// Evento para guardar los cambios
formEditar.addEventListener('submit', async (e) => {
    
    e.preventDefault();

    // Se capturan los datos del formulario
    const titulo = document.querySelector('#titulo').value;
    const detalle = document.querySelector('#detalle').value;
    const url_imagen = document.querySelector('#url_imagen').value;
    const fecha_publicacion = document.querySelector('#fecha_publicacion').value;
    const nombre_autor = document.querySelector('#nombre_autor').value;

    // Se envia al servidor
    const response = await fetch(`/editar/${id}`, {
        method: 'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, detalle, url_imagen, fecha_publicacion, nombre_autor})
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"
    
})