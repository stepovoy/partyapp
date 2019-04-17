module.exports = function (sequelize, DataTypes) {
    return sequelize.define('PartyUser', {
            partyId: {
                type: DataTypes.INTEGER,
            },
            userId: {
                type: DataTypes.INTEGER,
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