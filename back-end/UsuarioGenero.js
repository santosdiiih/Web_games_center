const { Model, DataTypes } = require("sequelize");

class UsuarioJogo extends Model {
    static init (sequelize){
        super.init(
            {
            
        },
        {
            sequelize,
            tableName: "tblUsuarioJogo"
        }
        );
    }

    static associate(models){
        this.hasMany(models.Usuario, {foreignKey: "idUsuario" });
        this.belongsTo(models.Jogo, {foreignKey: "idJogo" });

    }
}

module.exports = UsuarioJogo;