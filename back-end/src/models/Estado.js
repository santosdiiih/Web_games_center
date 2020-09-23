const { Model, DataTypes } = require("sequelize");

class Estado extends Model {
    static init (sequelize){
        super.init(
        {
           nome: DataTypes.STRING,
           sigla: DataTypes.STRING, 
        },
        {
            sequelize,
            tableName:"tblEstado"
        }
        );
    }
    static associate(models){
        this.hasMany(models.Usuario);
    }
}

module.exports = Estado;