const TABLES = require('../../util/constants').TABLES
const GENERES = require('../../util/constants').GENERES
const booksTable = TABLES.BOOKS;

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex(booksTable.name).del()
    .then(() => {
      // Inserts seed entries
      return knex(booksTable.name).insert([
        {
          title: 'Book1',
          description: 'description1',
          ISBN: '37',
          author: 'author1',
          publication_date: new Date('01/01/1970'),
          genre: 'Science fiction',
          price: '10',
        },
        {
          title: 'Book2',
          description: 'description1',
          ISBN: '37',
          author: 'author1',
          publication_date: new Date('01/01/1970'),
          genre: 'Science fiction',
          price: '10',
        },
        {
          title: 'Book3',
          description: 'description3',
          ISBN: '37',
          author: 'author1',
          publication_date: new Date('01/01/1970'),
          genre: 'Science fiction',
          price: '10',
        },
      ]);
      
    });
};
