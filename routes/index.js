var express = require('express');
var router = express.Router();
const data = require('../data.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { ...data, layout: false });
});

module.exports = router;
