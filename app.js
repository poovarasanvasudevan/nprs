require('marko/node-require').install()
require('app-module-path').addPath(__dirname)
const markoExpress = require('marko/express')


function requireNoOp(module, filename) { /* no-op */
}

require.extensions['.less'] = requireNoOp
require.extensions['.css'] = requireNoOp

var createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

require('marko/browser-refresh').enable()

const indexRouter = require('./routes/index')

const app = express()
app.use(markoExpress())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/pd', require('./routes/parse'))
app.use('/parse', require('./kernel/parse-server'))
app.use('/dashboard', require('./kernel/parse-dashboard'))
app.get('/service-worker.js', (req, res) => {
    const filePath = path.join(__dirname, '/public/js/sw.js')
    res.sendFile(filePath)
})


module.exports = app
