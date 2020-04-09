// variable and import declarations
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

// middleware expressions
app.use(express.static('public'))

// routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// listen command
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})