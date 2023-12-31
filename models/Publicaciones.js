const { DataTypes, Sequelize, sequelize  } = require('../database');

const Publicacion = sequelize.define('Publicacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    detalle: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    url_imagen: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    nombre_autor: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'publicacion'
});

module.exports = Publicacion;


