var express = require('express');
var router = express.Router();//router functionaliteit koppelen aan experss

router.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
    res.send('Hello World!');
});

//functie openstellen
module.exports = router; //commonJS