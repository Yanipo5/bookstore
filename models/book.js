const bookshelf = require('../util/bookshelf');
const knex = require(`../util/knex.js`);
const TABLES = require(`../util/constants.js`).TABLES;

const bookTableName = TABLES.BOOKS.name
var Book = bookshelf.Model
    .extend({
        tableName: bookTableName,
        idAttribute: 'id',
    });

module.exports = {
    Book: Book
}