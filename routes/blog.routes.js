// const router = require('express').Router();

const { Router } = require('express');
const { getPosts, newPost, updatePost, deletePost } = require('../controllers/blog.controllers');
const router = Router()

// =====================================
//      RUTAS PARA RENDERIZAR VISTAS
// =====================================

//Vista Principal de las publicaciones
router.get('/', (req, res) => {
    res.render('index')
})


//Vista para agregar una nueva publicación
router.get('/admin', (req, res) => {
    res.render('admin')
})

//Vista para editar una publicación
router.get('/editar/:id', (req, res) => {
    res.render('editar', {id: req.params.id})
})


// =====================================
//      RUTAS PARA MANEJAR DATOS
// =====================================

// Crear nueva publicación
router.post('/publicacion', newPost)

// Obtener todas las publicaciones
router.get('/publicaciones', getPosts)

// Actualizar una publicación
router.put('/editar/:id', updatePost)

// Eliminar una publicación
router.delete('/eliminar/:id', deletePost)


module.exports = router;