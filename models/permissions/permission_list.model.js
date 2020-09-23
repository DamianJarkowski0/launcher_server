'use strict';
module.exports = (sequelize, type) => {
    const Model = sequelize.define('permissionList', {
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
        tableName: 'permission_list',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    Model.associate = function (models) {
        Model.belongsTo(models.permissionTypes,
            {
                foreignKey: 'type_id',
                as: 'type',
                targetKey: 'id',
                allowNull: false,
            });
        Model.belongsToMany(models.users,
            {
                through: models.userPermission,
                as: 'user', allowNull: false,
            });
        Model.belongsToMany(models.permissionGroups,
            {
                through: models.groupPermission,
                as: 'group',
                allowNull: false,
            });
    };

    Model.prototype.getJSON = () => {
        return {
            id: this.id,
            name: this.name,
        };
    };

    return Model;
};
