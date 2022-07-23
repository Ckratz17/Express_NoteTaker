// require router from express - activity 21 and 22, specifically in the routes in activity 22
const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let data = require('../db/db.json');
// GET ALL THE NOTES //
router.get('/', (req, res) => 
    // then take the notes and return them with res.json
    res.json(data));

// POST A NEW NOTE //
router.post('/notes', (req, res) => {
// addNote(req.body)
  const newTitle = req.title.body
  const newEntry = req.title.text
    
    if(!newTitle || !newEntry) {
        res.status(400).json('Error in making your note!')
    }else {
        const newNote = {
            id: uuid.v4(),
            title: newTitle,
            entry: newEntry
        }
        // then return note with res.json
        data.push(newNote)
        res.json(data)

    }
    
})

// DELETE A NOTE //
router.delete('/:id', (req, res) => {
    // removeNote(req.params.id)
    const deletenote = data.some(obj => obj.id === req.params.id)
    // give a status letting you know it's been deleted
    if(deletenote) {
        data = data.filter(obj => obj.id === req.params.id)
        res.json(data)
    }else {
        res.status(400).json(data)
    }
})

module.exports = router
// export your router