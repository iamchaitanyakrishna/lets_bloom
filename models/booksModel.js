const mongoose = require('mongoose')

const Joi = require('@hapi/joi')

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    author: {
        type: String,
        required : true,
        minlength: 3
    }
    
})

const Book = mongoose.model('Book', bookSchema)

function validateData(book) {

    const schema = {
        name: Joi.string().min(3).max(50).required(),
        Phone: Joi.number().integer()
    }

    return Joi.validate(book,schema)
}


exports.Book = Book

exports.validate = validateData