const { Model, DataTypes } = require("sequelize");

class Sexo extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING
        },
        {
            sequelize,
            tableName: "tblSexo"
        }
        );
    }
    static associate(models){
        this.hasMany(models.Usuario,  {foreignKey: "sexo_id" })
    }
}

module.exports = Sexo;