const User = require('./user');
const Book = require('./book');

Book.belongsTo(User);
User.hasMany(Book);

module.exports = { Book, User };

/*
Available instance methods:
.getUser
.setUser
.createUser
.getBook
.setBook
.createBook
.addBook
.removeBook
.hasBook
.countBook
*/

