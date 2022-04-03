// run.js
require('babel-register')({
    presets: ['env']
});
var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())

module.exports = require('./src/ramais.js');

module.exports = require('./src/setores.js');

module.exports = require('./src/nivers.js');

app.use('/', express.static('src'));

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
