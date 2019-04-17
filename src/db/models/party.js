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
        },
        {
            freezeTableName: true // Model tableName will be the same as the model name
        });
};