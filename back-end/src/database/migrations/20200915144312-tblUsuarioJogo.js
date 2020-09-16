'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblUsuarioJogo", {
            idUsuariojogo: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idJogo: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblJogo',
                    key: 'idJogo'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            idUsuario: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblUsuario',
                    key: 'idUsuario'
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
        return queryInterface.dropTable("tblUsuarioJogo", {})
    }
};