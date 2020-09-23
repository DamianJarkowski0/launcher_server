module.exports = (sequelize, type) => {
    const Model = sequelize.define('permissionTypes', {
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
        tableName: 'permission_types',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    Model.prototype.getJSON = () => {
        return {
            id: this.id,
            name: this.name,
        };
    };

    return Model;
};
