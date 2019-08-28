const Helpers = require('./dbHelpers');

async function checkIDIsValid(req, res, next) {
    const { id } = req.params;
    const test = await Helpers.getEntryByID(id)
    if (test) {
        next();
    }
    else {
        res.status(404).json({ error: `No Entry with ID ${id} available.` });
    }
}

function checkEntryIsValid(req, res, next) {
    const newEntry = req.body;

    if (Object.getOwnPropertyNames(newEntry).length === 0) {
        res.status(404).json({ error: "No information received." })
    }
    else if (newEntry.date && newEntry.weight && newEntry.notes) {
        next();
    }
    else {
        res.status(404).json({ message: "Please ensure all fields are present." })
    }
}

module.exports = {
    checkIDIsValid,
    checkEntryIsValid
}