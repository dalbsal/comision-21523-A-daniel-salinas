import { crearPublicaciones } from './crud-post.js';


// Referencia a elemento formulario de nueva publicación
const formNuevaPub = document.querySelector('#form-guardar');

formNuevaPub.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        titulo: document.querySelector('#titulo').value,
        detalle: document.querySelector('#detalle').value,
        url_imagen: document.querySelector('#url_imagen').value,
        fecha_publicacion: document.querySelector('#fecha_publicacion').value,
        nombre_autor: document.querySelector('#nombre_autor').value,
    }
    const respuesta = await crearPublicaciones(data)
    
    alert(respuesta.msg);
    location.href='/'
})