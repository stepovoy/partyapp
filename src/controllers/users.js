const User = require('../db/models').User;

module.exports = {
    index: async (req, res) => {
        const data = await User.findAll();
        res.status(200).json({data});
    },
    create: async (req, res) => {
        res.status(200).json({status: "Ok"});
    },
    update: async (req, res) => {
        res.status(200).json({status: "Ok"});
    },
    delete: async (req, res) => {
        res.status(200).json({status: "Ok"});
    },
};