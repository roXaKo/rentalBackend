const express = require('express')
const error = require('../middleware/error')
const genres = require('../routes/genres');
const customer = require('../routes/customer')
const welocome = require('../routes/welcome')
const movies = require('../routes/movies')
const rents = require('../routes/rents')
const user = require('../routes/user')
const returns = require('../routes/returns')
const auth = require('../routes/auth')

module.exports = function (app) {
    app.use(express.json())
    app.use('/', welocome)
    app.use('/api/genres', genres)
    app.use('/api/customer', customer)
    app.use('/api/movies', movies)
    app.use('/api/rents', rents)
    app.use('/api/user', user)
    app.use('/api/auth', auth)
    app.use('/api/returns', returns)
    app.use(error)
}