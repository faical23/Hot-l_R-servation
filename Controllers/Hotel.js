const HotelSchema = require('../Modules/Hotel')
const Helper = require('../Helpers')
// const Mailer = require('../Mailer')

module.exports={
    Get: async (req, res) => {
        res.status(201).send({Message : "get"})
    },
    GetOne: async (req, res) => {
        res.status(201).send({Message : "get one"})
    },
    Add: async (req, res) => {
        res.status(201).send({Message : "add"})
    },
    Update: async (req, res) => {
        res.status(201).send({Message : "update"})
    },
    Delete: async (req, res) => {
        res.status(201).send({Message : "delete"})
    },
}