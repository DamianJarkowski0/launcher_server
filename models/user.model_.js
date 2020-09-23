'use strict';
module.exports = (sequelize, type) => {
    const Model = sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: type.STRING,
            allowNull: false,
        },
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },
        emailConfirmation: {
            field: 'email_confirmation',
            type: type.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        emailConfirmationToken: {
            field: 'email_confirmation_token',
            type: type.STRING,
        },
        emailConfirmationExpires: {
            field: 'email_confirmation_expires',
            type: type.DATE,
        },
        resetPasswordToken: {
            field: 'reset_password_token',
            type: type.STRING,
        },
        resetPasswordExpires: {
            field: 'reset_password_expires',
            type: type.DATE,
        },
        changePasswordDate: {
            field: 'change_password_date',
            type: type.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'users',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    Model.associate = function (models) {
        Model.belongsTo(models.permissionGroups,
            {foreignKey: 'group_id', as: 'group', targetKey: 'id'});
        Model.belongsToMany(models.permissionList,
            {through: models.userPermission, as: 'permissions'});
    };

    Model.prototype.toWeb = function (pw) {
        return {
            username: this.username,
            email: this.email,
        };
    };

    return Model;
};
