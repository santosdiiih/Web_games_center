const {Model, DataTypes} = require("sequelize");

class Usuario extends Model{
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
            dataDeNascimento: DataTypes.DATE,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
            nickname: DataTypes.STRING,
            contaPremium: DataTypes.BOOLEAN,
            idGeneroSexual: DataTypes.INTEGER,
            idEstado: DataTypes.INTEGER,            
        },
        {
            sequelize,
            tableName: "tblUsuario"
        }
        );        
    }
    static associate(models){
        this.belongsTo(models.Estados, {foreignKey: "idEstado" });
        this.belongsTo(models.GeneroSexual, {foreignKey: "idGeneroSexual" });
        this.belongsToMany(models.Jogo, {through: "tblUsuarioJogo"});
    } 
}

module.exports = Usuario;