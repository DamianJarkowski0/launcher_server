'use strict';
module.exports = (sequelize, type) => {
    const Model = sequelize.define('userPermission', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: type.BOOLEAN,
            allowNull: false,
        },
    },
    {
        tableName: 'user_permission',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    Model.prototype.toWeb = function (pw) {
        return {
            id: this.id,
            name: this.name,
        };
    };

    return Model;
};
