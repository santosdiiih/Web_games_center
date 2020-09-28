'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblUsuario", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            data_de_nascimento: {
                type: Sequelize.DATE,
                allowNull: false
            },
            senha: {
                type: Sequelize.STRING(100),
                allowNull:false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull:false,
                unique: true
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            conta_premium: {
                type: Sequelize.BOOLEAN,
                allowNull:false
            },
            id_sexo: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblSexo',
                    key: 'id'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            id_estado: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblEstado',
                    key: 'id'                    
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
        return queryInterface.dropTable("tblUsuario", {})
    }
};