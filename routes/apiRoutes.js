// require router from express - activity 21 and 22, specifically in the routes in activity 22
const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let data = require('../db/db.json');
// GET ALL THE NOTES //
router.get('/', (req, res) => res.json(data));
// POST A NEW NOTE //
router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Need non-empty title and text input.'})
    } else {
        const newJSON = {
            id: uuid.v4(),
            title: newTitle,
            text: newText
        };
        data.push(newJSON);
        res.json(data);
    };
});
// DELETE A NOTE //
router.delete('/:id', (req, res) => {
    const found = data.some(obj => obj.id === req.params.id);
    if (found) {
        data = data.filter(obj => obj.id !== req.params.id);
        res.json(data);
    } else {
        res.status(400).json(data);
    };
});

// export your router
module.exports = router;
