const Book = require("../../models/book").Book,
  knex = require("../../util/knex"),
  TABLES = require("../../util/constants").TABLES,
  booksTable = TABLES.BOOKS;

exports.getBooks = (req, res) => {
  knex
    .select(booksTable.id, booksTable.title)
    .from(booksTable.name)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.sendStatus(500);
    });
};

exports.getBook = (req, res) => {
  const id = req.params.id;
  Book.where({ id: id })
    .fetch()
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.sendStatus(404);
    });
};

exports.createBook = (req, res) => {
  if(req.body.id !== undefined){
    res.sendStatus(400);
    return;
  }
  
  const book = req.body;
  // ensure no book id is supplied
  delete book.id;
  book.publication_date = new Date(book.publication_date);
  book.updated_at = new Date();
  Book.forge(book)
    .save()
    .then(savedBook => {
      res.json(savedBook);
    })
    .catch(err => {
      res.sendStatus(400);
    });
};

exports.updateBook = (req, res) => {
  if(Number(req.params.id) !== req.body.id){
    res.sendStatus(400);
    return;
  }

  let book = req.body;
  book.publication_date = new Date(book.publication_date);
  book.updated_at = new Date();
  delete book.created_at;

  Book.forge({ id: book.id })
    .save(book)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(400);
    });
};

exports.removeBooks = (req, res) => {
  const id = req.params.id;
  Book.where({ id: id })
    .destroy()
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(204);
    });
};
