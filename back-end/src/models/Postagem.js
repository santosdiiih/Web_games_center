const { Model, DataTypes } = require("sequelize");

class Postagem extends Model {
    static init (sequelize){
        super.init(
            {
            dataHora: DataTypes.DATE,
            descricao: DataTypes.TEXT,
            qtdCurtidas: DataTypes.INTEGER,
            imagem_video: DataTypes.STRING,
            hashtags: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: "tblPostagem"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey: "idUsuario" });
        this.belongsTo(models.Jogo, {foreignKey: "idJogo" });
        this.hasMany(models.Comentario);
    }
}

module.exports = Postagem;