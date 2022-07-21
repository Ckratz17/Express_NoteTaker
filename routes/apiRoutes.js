// require router from express - activity 21 and 22, specifically in the routes in activity 22
const api = require('express').Router();
const uuid = require('uuid')

let data = require('../db/db.json')
// GET ALL THE NOTES //
api.get('/', (req, res) => 
    // then take the notes and return them with res.json
    res.json(data)
)

// POST A NEW NOTE //
api.post('/notes', (req, res) => {
// addNote(req.body)
  const newTitle = req.title.body
  const newNote = req.title.text
    
    // then return note with res.json
})

// DELETE A NOTE //
api.delete('notes/:id', (req, res) => {
    // removeNote(req.params.id)
    const delestatus = data.some(obj => obj.id === req.params.id)
    // give a status letting you know it's been deleted
    if(delestatus) {
        data = data.filter(obj => obj.id === req.params.id)
        res.json(data)
    }else {
        res.status(400).json(data)
    }
})

// export your router