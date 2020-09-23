'use strict';
module.exports = (sequelize, type) => {
    const Model = sequelize.define('groupPermission', {
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
        tableName: 'group_permission',
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
