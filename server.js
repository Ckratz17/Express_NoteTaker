// require express
const express = require('express');
const path = require('path');

// load express.js
const app = express();

app.use(express.json());
// middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
// middleware for api router
app.use('/api/notes', require('./routes/apiRoutes'));
// middleware for html router
app.use('/', require('./routes/htmlRoutes'));

// create a port - reference server.js files from activities in this module
const PORT = process.env.PORT || 3000;

// start the server on the port - app.listen - reference server.js files from activites in this module
app.listen(PORT, () => 
  console.log(`Server is listening at port http://localhost:${PORT} 🚀`)
)