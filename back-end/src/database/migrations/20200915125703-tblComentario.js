'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblComentario", {
            idComentario: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            comentario: {
                type: Sequelize.TEXT,
                allowNull: false
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
            idPostagem: {
                type: Sequelize.INTEGER,
                references: {
                    model:'tblPostagem',
                    key: 'idPostagem'
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
        return queryInterface.dropTable("tblComentario", {})
    }
};