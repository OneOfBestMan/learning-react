require('babel-core/register')({})
require('babel-polyfill')

var server = require('./server').default
var port = process.env.PORT || 8080

server.listen(port, function() {
  console.log(`server listening on port ${port}`)
})
