const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    console.log('ay')
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(3000, () => {
    console.log('listening on port 3000 jason')
})
