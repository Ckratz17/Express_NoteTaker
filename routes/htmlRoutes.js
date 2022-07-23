// require path
const fs = require('fs');
const path = require('path');
// rquire router from express - activity 21 and 22, specifically in the routes in activity 22
const express = require('express');
const router = express.Router();

const getPath = (name) => path.join(__dirname, '..', 'public', `${name}.html`);
// set up a route for /notes that responds with the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(getPath("notes"));
});
// for any other routes, using * as the path, you can respond with the index.html file
router.get('*', (req, res) => {
    res.sendFile(getPath("index"));
});

module.exports = router;





