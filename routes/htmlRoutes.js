// require path
const path = require('path')
const fs = require('fs')
// rquire router from express - activity 21 and 22, specifically in the routes in activity 22
const router = require('express').Router()
// set up a route for /notes that responds with the notes.html file
const getPath = (name) => path.join(__dirname, '..', 'public', `${name}.html`);

router.get('/notes', (req, res) =>
    res.sendFile(getPath('notes'))
)

// for any other routes, using * as the path, you can respond with the index.html file
router.get('*', (req, res) => 
    res.sendFile(getPath('index')
    )
)

module.exports = router;