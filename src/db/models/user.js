module.exports = function (sequelize, DataTypes) {
    return sequelize.define('User', {
            username: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    notEmpty: true
                }
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notEmpty: true
                }
            },
            rating: {
                type: DataTypes.INTEGER
            },
        },
        {
            freezeTableName: true // Model tableName will be the same as the model name
        });
};