'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblItens", {
            idItens: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            valor:{
                type: Sequelize.INTEGER,
                allowNull:false
            },
            quantidadeItem: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            descontoPremium: {
                type: Sequelize.DOUBLE,
                allowNull: false
            },
            idLoja: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "tblLoja",
                    key: "idLoja"
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
        return queryInterface.dropTable("tblItens", {})
    }
};