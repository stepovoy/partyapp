module.exports = function (sequelize, DataTypes) {
    return sequelize.define('User', {
            username: {
                // allowNull: false, // todo uncomment it for dev
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    notEmpty: true
                }
            },
            email: {
                // allowNull: false, // todo uncomment it for dev
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                // allowNull: false, // todo uncomment it for dev
                type: DataTypes.STRING,
                validate: {
                    notEmpty: true
                }
            },
            rating: {
                type: DataTypes.INTEGER
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