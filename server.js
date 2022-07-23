// require express
const express = require('express')
const path = require('path')
const app = express()

// initialize the app
// create a port - reference server.js files from activities in this module
const PORT = process.env.PORT || 3001
// set up body parsing, static, and route middleware - activities 15 and 16
app.use(express.json())
app.use('/api/notes', require('./routes/apiRoutes'));
app.use('/', require('./routes/htmlRoutes')); 

app.use(express.static('public'))

// start the server on the port - app.listen - reference server.js files from activites in this module
app.listen(PORT, () => 
console.log(`Server is listening at port http://localhost:${PORT} 🚀`))