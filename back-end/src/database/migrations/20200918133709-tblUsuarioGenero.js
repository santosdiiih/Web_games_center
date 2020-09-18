'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblUsuarioGenero", {
            idUsuarioGenero: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
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
            idGenero: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblGenero',
                    key: 'idGenero'
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
        return queryInterface.dropTable("tblUsuarioGenero", {})
    }
};