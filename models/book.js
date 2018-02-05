const bookshelf = require('../util/bookshelf');
const knex = require(`../util/knex.js`);
const constants = require(`../util/constants.js`).TABLES;

const bookTableName = TABLES.BOOKS
exports.Book = bookshelf.Model
    .extend({
        tableName: bookTableName,
        idAttribute: 'id',
    });

module.exports = {
    Book: Book
}