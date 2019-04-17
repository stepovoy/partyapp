const Party = require('../db/models').Party;
const PartyUser = require('../db/models').PartyUser;

module.exports = {
    index: async (req, res) => {
        const data = await Party.findAll();
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
    users: async (req, res) => {
        const data = await PartyUser.findAll();
        res.status(200).json({data});
    },
    addUser: async (req, res) => {
        res.status(200).json({status: "Ok"});
    },
    removeUser: async (req, res) => {
        res.status(200).json({status: "Ok"});
    },
};