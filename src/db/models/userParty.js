module.exports = function (sequelize, DataTypes) {
    return sequelize.define('UserParty', {
            userId: {
                type: DataTypes.INTEGER,
            },
            partyId: {
                type: DataTypes.INTEGER,
            },
        },
        {
            freezeTableName: true // Model tableName will be the same as the model name
        });
};