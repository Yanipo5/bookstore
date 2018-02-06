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
          title: '1984',
          description: 'Written in 1948, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever...',
          ISBN: '97804515',
          author: 'George Orwell',
          publication_date: new Date('05/01/1950'),
          genre: 'Science fiction',
          price: '10',
        },
        {
          title: 'A Brief History of Time',
          description: 'A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?',
          ISBN: '0553380',
          author: 'Stephen Hawking',
          publication_date: new Date('09/01/1998'),
          genre: 'Mystery',
          price: '12',
        },
        {
          title: 'Fear and Loathing in Las Vegas',
          description: 'This cult classic of gonzo journalism is the best chronicle of drug-soaked, addle-brained, rollicking good times ever committed to the printed page. It is also the tale of a long weekend road trip that has gone down in the annals of American pop culture as one of the strangest journeys ever undertaken.',
          ISBN: '06797858',
          author: 'author1',
          publication_date: new Date('05/12/1998'),
          genre: 'Mystery',
          price: '15',
        },
        {
          title: 'Silent Spring',
          description: 'Rachel Carson’s Silent Spring was first published in three serialized excerpts in the New Yorker in June of 1962. The book appeared in September of that year and the outcry that followed its publication forced the banning of DDT and spurred revolutionary changes in the laws affecting our air, land, and water. Carson’s passionate concern for the future of our planet reverberated powerfully throughout the world, and her eloquent book was instrumental in launching the environmental movement. It is without question one of the landmark books of the twentieth century.  ',
          ISBN: '0618249',
          author: 'Rachel Carson',
          publication_date: new Date('05/12/1998'),
          genre: 'Romance',
          price: '18',
        },
      ]);
      
    });
};
