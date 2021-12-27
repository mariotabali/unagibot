const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const ex = require('./exec.js')
const server = ronin.server()
//:8000/test
server.use('/', mocks.server(server.Router(), false, true))
server.start()
