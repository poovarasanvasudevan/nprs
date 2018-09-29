var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/dashboard', function (req, res, next) {
    res.marko(require('../views/pages/parse/dashboard/index.marko'), {
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    })
})

module.exports = router
