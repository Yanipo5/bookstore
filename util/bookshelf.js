const knex = require(`${__dirname}/knex.js`);
const bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;
