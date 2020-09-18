const { Model, DataTypes } = require("sequelize");

class Loja extends Model {
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: "tblLoja"
        }
        );
    }

    static associate(models){
        this.hasMany(models.Itens)
    }
}

module.exports = Loja;