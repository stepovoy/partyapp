const User = require('../db/models').User;

module.exports = {

    index: async (req, res) => {
        const data = await User.findAll();

        res.status(200).json({data});
    },

    create: async (req, res) => {
        const data = await User.create(); // todo this

        res.status(200).json({data});
    },

    update: async (req, res) => {
        const {userId} = req.params;
        const where = {userId};

        res.status(200).json({status: "Ok"}); // todo this
    },

    delete: async (req, res) => {
        const {userId} = req.params;
        const where = {userId};

        const data = await User.destroy({where});
        res.status(200).json({data});
    },

};