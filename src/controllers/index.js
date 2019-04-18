const db = require('../db/models');

module.exports = {
    healthCheck: (req, res) => {
        res.status(200).json({status: "Ok"});
    },
    recreateDbs: (req, res) => {
        // Force sync all models
        db.sequelize.sync({force: true}).then(() => {
            console.log('success');
        }).catch(error => {
            console.error(error);
        });
        res.status(200).json({status: "Ok"});
    }
};