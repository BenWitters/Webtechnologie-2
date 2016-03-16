// express: routing oplossen
// mongoose: (bv pdo maakt het simpelen) -> laag bovenop mongo db op makkelijk objecten te gaan vinden
// body parser: node is heel basic(kan standaard geen JSON ontvangen) -> json ontvangen met body parser
// jade: zoals emmet

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jade = require('jade');

mongoose.connect('mongodb://localhost/chat');//test = naam van databank

var app = express();

app.set('view engine', 'jade');

//bodyparser gebruiken
app.use(bodyParser.json()); // verwerk elk json request->omzetten naar json

//router kenbaar maken middleware: tussen begin en eindrequest -> app.use midleware definieren
app.use("/", require('./routers/index'));// alles wat op slash begint, afhandelen bij require
app.use("/messages", require('./routers/messages')); // middleware gaat beginnen als we /messages typen -> afhandelen in router /messages
// body parser: json parsen

// luister op port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});