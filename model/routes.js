const express = require('express');
const Router = express();
const Helpers = require('../model/dbHelpers');
const Middleware = require('./middleware');

Router.get('/', (req, res) => {
    Helpers.getAllEntries()
        .then(data => {
            res.send(data)
        })
})

Router.get('/:id', Middleware.checkIDIsValid, (req, res) => {
    const { id } = req.params;
    Helpers.getEntryByID(id)
        .then(data => {
            res.send(data)
        })
})

Router.post('/', Middleware.checkEntryIsValid, (req, res) => {
    const { date, weight, notes } = req.body;
    Helpers.postNewEntry(date, weight, notes)
        .then(data => {
            res.send(data[0])
        })
})

Router.delete('/:id', Middleware.checkIDIsValid, (req, res) => {
    const { id } = req.params;
    Helpers.deleteEntryByID(id)
        .then(() => {
            res.send({ message: `Record with ID #${id} deleted.` })
        })
})

module.exports = Router;    