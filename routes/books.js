const express = require('express')

const router = express.Router()

const { Book, validate } = require('../models/booksModel')



router.get('/', async (req, res) => {

    let books = await Book.find()

    res.send(books);
});

router.post('/', async (req, res) => {

    const { error } = validate(req.body)

    if (error) res.status(400).send(error.details[0].message)

    const book = new Book({
        name: req.body.name,
        author: req.body.author
    });

    await book.save();

    res.send(book);

});

router.put('/:id', async (req, res) => {


    const { error } = validate(req.body)

    if (error) res.status(400).send(error.details[0].message)

    const book = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        author: req.body.author
    }, { new: true })

    if (!book) return res.status(404).send('Book with the given ID was not found.');

    res.send(book);
});

router.delete('/:id', async (req, res) => {

    const book = await Book.findByIdAndDelete(req.params.id)

    if (!book) return res.status(404).send('Book with the given ID was not found.');

    res.send(book);
});

router.get('/:id', async (req, res) => {

    const book = await Book.findById(req.params.id)

    if (!book) return res.status(404).send('Book with the given ID was not found.');

    res.send(book);
});



module.exports = router
