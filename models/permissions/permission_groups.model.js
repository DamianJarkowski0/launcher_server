'use strict';
module.exports = (sequelize, type) => {
    const Model = sequelize.define('permissionGroups', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        tableName: 'permission_groups',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    Model.associate = function (models) {
        Model.belongsToMany(models.permissionList,
            {through: models.groupPermission, as: 'permission'});
    };

    Model.prototype.getJSON = () => {
        return {
            id: this.id,
            name: this.name,
        };
    };

    return Model;
};
