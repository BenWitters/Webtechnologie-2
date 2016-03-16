/**
 * Created by Ben on 10/03/2016.
 */
var express = require('express');
// object router dat alle request kan afhandelen -> las je dit niet hebt kan je ook niet zeggen waar de routes verwerkt kunnen worden
var router = express.Router(); // start webserver, luister naar request !Router() != router()

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeIntro');
// respond with "hello world" when a GET request is made to the homepage
// / om naar pagina's te surfen

// / om naar pagina's te surfen
// elke router die passeert oplossen in index file (include module)
router.get('/', require('./routers/index.js')); // logia in index, router map
// elke router die langs messages komt dooverwijsen naaar messages
router.get('/messages', require('./routers/messages.js'));



// luisteren naar bepaalde port
    router.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
// openstellen
