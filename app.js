var express = require('express');
var app = express();
var rpio = require('rpio')

rpio.open(3,rpio.OUTPUT,rpio.LOW);

app.get('/', (req, res) => res.send('index.html'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

