
const Publicacion = require('../models/Publicaciones');
const ctrl = {}

ctrl.newPost = async (req, res) => {
    // const { titulo, detalle, url_imagen, fecha_publicacion } = req.body;

    try {
        const publicacion = await Publicacion.create(req.body);
        await publicacion.save()

        res.send({ msg: "Publicación creada con éxito", publicacion })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al crear la publicación"
        })
    }
}

ctrl.getPosts = async (req, res) => {

    try {
        const publicaciones = await Publicacion.findAll();
        return res.json(publicaciones)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al consultar las publicaciones"
        })
    }
}

ctrl.getPost = async (req, res) => {
    try {
        const publicacion = await Publicacion.findByPk(req.params.id)
        return res.json(publicacion)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al obtener las publicación"
        })
    }
} 

ctrl.updatePost = async (req, res) => {
    const { id } = req.params;

    try {
        const publicacion = await Publicacion.findByPk(id);
        publicacion.set(req.body);

        await publicacion.save(); //Con esta instrucción se guarda en la base de datos

        return res.json({
            msg: "La publicación se ha actualizado exitosamente"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al querer actualizar"
        })
    }
}

ctrl.deletePost = async (req, res) => {
    
    const { id } = req.params;
    try {
        await Publicacion.destroy({
            where: {
                id
            }
        })
        return res.json({
            msg: 'Publicación eliminada con éxito!'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al eliminar la publicación"
        })
    }
}


module.exports = ctrl;