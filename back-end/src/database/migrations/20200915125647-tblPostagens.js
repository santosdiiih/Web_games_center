'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblPostagem", {
            idPostagem: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descricao: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            qtdCurtidas: {
                type: Sequelize.INTEGER,
            },
            imagem_video: {
                type: Sequelize.STRING(300),
            },
            hashtag: {
                type: Sequelize.STRING(50),
            },
            idUsuario: {
                type: Sequelize.INTEGER,
                references: {
                    model:'tblUsuario',
                    key: 'idUsuario'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            idJogo: {
                type: Sequelize.INTEGER,
                references: {
                    model:'tblJogo',
                    key: 'idJogo'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("tblPostagem", {})
    }
};