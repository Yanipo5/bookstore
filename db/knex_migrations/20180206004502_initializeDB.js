const TABLES = require("../../util/constants").TABLES;
const GENERES = require("../../util/constants").GENERES;
const booksTable = TABLES.BOOKS;

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists(booksTable.name, table => {
    table.increments();
    table.string(booksTable.title).notNullable();
    table.string(booksTable.description, 2040).notNullable();
    table.bigInteger(booksTable.ISBN).notNullable();
    table.string(booksTable.author).notNullable();
    table.date(booksTable.publication_date).notNullable();
    table.enu(booksTable.genre, GENERES).notNullable();
    table.integer(booksTable.price).notNullable();
    table.timestamp(booksTable.created_at).defaultTo(knex.fn.now());
    table.timestamp(booksTable.updated_at);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(booksTable.name);
};
