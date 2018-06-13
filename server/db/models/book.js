const Sequelize = require('sequelize');
const db = require('../db');


const Book = db.define('book', {
  status: {
    type: Sequelize.ENUM('Memorizing', 'Memorized', 'Skip' )
  },
  book: {
    type: Sequelize.STRING
  },
  chapter: {
    type: Sequelize.INTEGER
  },
  verse: {
    type: Sequelize.INTEGER
  }
})

module.exports = Book;
