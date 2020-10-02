const { Model, DataTypes } = require("sequelize");

class Itens extends Model {
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
            imagem: DataTypes.STRING,
            valor: DataTypes.INTEGER,
            quantida_de_item: DataTypes.INTEGER,
            desconto_premium: DataTypes.DOUBLE
        },
        {
            sequelize,
            tableName: "tblItens"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Loja, {foreignKey: "loja_id" })
    }
}

module.exports = Itens;