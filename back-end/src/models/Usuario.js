const {Model, DataTypes} = require("sequelize");

class Usuario extends Model{
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
            data_de_nascimento: DataTypes.DATE,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
            nickname: DataTypes.STRING,
            conta_premium: DataTypes.BOOLEAN,
            id_sexo: DataTypes.INTEGER,
            id_estado: DataTypes.INTEGER,            
        },
        {
            sequelize,
            tableName: "tblUsuario"
        }
        );        
    }
    static associate(models){
        this.belongsTo(models.Estado, {foreignKey: "id_estado" });
        this.belongsTo(models.Sexo, {foreignKey: "id_sexo" });
        // this.belongsToMany(models.Genero, {through: "tblUsuarioGenero" });
        // this.belongsToMany(models.Jogo, {through: "tblUsuarioJogo"});
    } 
}

module.exports = Usuario;