'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblEstados", {
            idEstado: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            nome: {
                type: Sequelize.STRING(16),
                allowNull: false
            },
            sigla: {
                type: Sequelize.STRING(2),
                allowNull: false
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
        return queryInterface.dropTable("tblEstados", {})
    }
};