const db = require('../db/models');
const User = require('../db/models/user');

module.exports = {
    index: (req, res) => {
        res.status(200).json({status: "Ok"});
    },
    create: (req, res) => {
        res.status(200).json({status: "Ok"});
    },
    update: (req, res) => {
        res.status(200).json({status: "Ok"});
    },
    delete: (req, res) => {
        res.status(200).json({status: "Ok"});
    },
};