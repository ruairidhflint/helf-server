const db = require('../database')

function getAllEntries() {
    return db.select().
        from('weight');
}

function getEntryByID(id) {
    return db.select()
        .from('weight')
        .where('id', id)
        .first();
}

function postNewEntry(date, weight, notes) {
    return db.insert({date, weight, notes})
        .returning('*')
        .into('weight');
}

function deleteEntryByID(id) {
    return db.select()
        .from('weight')
        .where('id', id)
        .delete();
}

module.exports = {
    getAllEntries,
    getEntryByID,
    postNewEntry,
    deleteEntryByID
}