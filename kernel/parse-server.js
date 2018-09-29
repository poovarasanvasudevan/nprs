const config = require('./config')
var ParseServer = require('parse-server').ParseServer
const settings = config.get('parseserver')

var server = new ParseServer(settings)

module.exports = server