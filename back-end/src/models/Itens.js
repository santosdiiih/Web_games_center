const { Model, DataTypes } = require("sequelize");

class Itens extends Model {
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
            valor: DataTypes.INTEGER,
            qtde: DataTypes.INTEGER,
            descontoPremium: DataTypes.DOUBLE
        },
        {
            sequelize,
            tableName: "tblItens"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Loja, {foreignKey: "idLoja" })
    }
}

module.exports = Itens;