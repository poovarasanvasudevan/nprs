var convict = require('convict')

var config = convict({})
config.loadFile('./conf/server.json')

module.exports = config