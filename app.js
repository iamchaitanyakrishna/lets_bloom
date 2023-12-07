const express = require('express')

const mongoose = require('mongoose')

const books = require('./routes/books')

const app = express()


mongoose.connect('mongodb://127.0.0.1/Test')
    .then(() => console.log('Connection is successful to DataBase'))
    .catch(err => console.log('Couldnt connect to mongodb', err))


app.use(express.json());

app.use('/api/books', books)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
