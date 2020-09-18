const { Model, DataTypes } = require("sequelize");

class GeneroSexual extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING
        },
        {
            sequelize,
            tableName: "tblGenerosexual"
        }
        );
    }
    static associations(models){
        this.hasMany(models.Usuario)
    }
}

module.exports = GeneroSexual;