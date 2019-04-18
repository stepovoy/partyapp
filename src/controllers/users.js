const User = require('../db/models').User;

module.exports = {

    index: async (req, res) => {
        const data = await User.findAll();

        res.status(200).json({data});
    },

    create: async (req, res) => {
        const userData = req.body;

        const data = await User.create(userData);

        res.status(200).json({data});
    },

    update: async (req, res) => {
        const userData = req.body;
        const {id} = req.params;
        const where = {id};

        const data = await User.update(userData, {where});

        res.status(200).json({data});
    },

    delete: async (req, res) => {
        const {id} = req.params;
        const where = {id};

        const data = await User.destroy({where});
        res.status(200).json({data});
    },

};