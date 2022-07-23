// require path
const { Router } = require('express')
const fs = require('fs')
const path = require('path')
const htmlRouter = require('express').Router()
// rquire router from express - activity 21 and 22, specifically in the routes in activity 22

// set up a route for /notes that responds with the notes.html file
htmlRouter.get('/notes', (req, res) =>
    res.sendFile(getPath('notes'))
)

// for any other routes, using * as the path, you can respond with the index.html file
Router.get('*', (req, res) => 
    res.sendFile(getPath('index')
    )
)

module.exports = htmlRouter;