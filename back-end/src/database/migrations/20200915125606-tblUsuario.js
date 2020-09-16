'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblUsuario", {
            idUsuario: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            dataDeNascimento: {
                type: Sequelize.DATE,
                allowNull: false
            },
            senha: {
                type: Sequelize.STRING(16),
                allowNull:false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull:false
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            contaPermium: {
                type: Sequelize.BOOLEAN,
                allowNull:false
            },
            idGeneroSexual: {
                type: Sequelize.INTEGER,
                references: {
                    model:'tblGeneroSexual',
                    key: 'idGeneroSexual'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            idEstado: {
                type: Sequelize.INTEGER,
                references: {
                    model:'tblEstados',
                    key: 'idEstado'
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