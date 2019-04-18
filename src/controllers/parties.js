const Party = require('../db/models').Party;
const PartyUser = require('../db/models').PartyUser;

module.exports = {

    index: async (req, res) => {
        const data = await Party.findAll();

        res.status(200).json({data});
    },

    create: async (req, res) => {
        const partyData = req.body;

        const data = await Party.create(partyData);

        res.status(200).json({data});
    },

    update: async (req, res) => {
        const partyData = req.body;
        const {id} = req.params;
        const where = {id};

        const data = await Party.update(partyData, {where});

        res.status(200).json({data});
    },

    delete: async (req, res) => {
        const {id} = req.params;
        const where = {id};

        const data = await PartyUser.destroy({where});

        res.status(200).json({data});
    },

    allPartyUsers: async (req, res) => {
        const data = await PartyUser.findAll();

        res.status(200).json({data});
    },

    partyUsers: async (req, res) => {
        const {partyId} = req.params;
        const where = {partyId};

        const data = await PartyUser.findAll({where});

        res.status(200).json({data});
    },

    addUser: async (req, res) => {
        const {partyId, userId} = req.params;
        const where = {partyId, userId};

        const data = await PartyUser.findOrCreate({where});

        res.status(200).json({data});
    },

    removeUser: async (req, res) => {
        const {partyId, userId} = req.params;
        const where = {partyId, userId};

        const data = await PartyUser.destroy({where});

        res.status(200).json({data});
    },

};