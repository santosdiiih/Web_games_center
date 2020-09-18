const { Model, DataTypes } = require("sequelize");

class Comentario extends Model{
    static init(sequelize){
        super.init({
            comentario: DataTypes.TEXT
        },
        {
            sequelize,
            tableName: "tblComentario"
        }
        );
    }
    static associations(models){
        this.hasMany(models.Usuario, {foreignKey: "idUsuario"});
        this.hasMany(models.Postagens, {foreignKey: "idPostagem"});

    }
}

module.exports = Comentario;