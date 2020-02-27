const knex = require('knex');
const db = knex(require('../../knexfile').development);

module.exports = {
    find,
    findByID,
    insert
}

function find() {
    return db('cars');
}

function findByID(id) {
    return db('cars')
        .where({ id: Number(id) });
}

function insert(data) {
    return db('cars')
        .insert(data)
        .then(ids => ({ id: ids[0] }));
}