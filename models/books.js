const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date
  },
  genre: {
    type: String
  },
  price: {
    type: Number,
    min: 0
  }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;