module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Party', {
            name: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            country: {
                type: DataTypes.STRING
            },
            city: {
                type: DataTypes.STRING
            },
            coordinates: {
                type: DataTypes.STRING // for google maps (lat/long)
            },
            createdAt: {
                // allowNull: false, // todo uncomment it for dev
                type: DataTypes.DATE,
                default: sequelize.Sequelize.fn('NOW')
            },
            updatedAt: {
                // allowNull: false, // todo uncomment it for dev
                type: DataTypes.DATE,
                default: sequelize.Sequelize.fn('NOW')
            },
        },
        {
            timestamps: true,
            freezeTableName: true // Model tableName will be the same as the model name
        });
};