var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
    res.marko(require('../views/pages/landing/index.marko'), {
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    })
})


router.get('/signup', function (req, res, next) {
    res.marko(require('../views/pages/signup/index.marko'), {})
})

module.exports = router
