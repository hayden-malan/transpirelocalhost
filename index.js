var server = require('./server')

var port = process.env.PORT || 2000

server.listen(port, function () {
  console.log('Server listening on port:', port)
})