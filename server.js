var express = require('express')

var server = express()
var bodyParser = require('body-parser')

server.use(express.static('public'));

server.get('/', function (req, res) {
  res.sendFile(__dirname + '/homepage.html')
})

module.exports = server