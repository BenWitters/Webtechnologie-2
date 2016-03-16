var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


// add one message to the database
// eerst mongoose schema defineren
var messageSchema = mongoose.schema({
    user: String,
    message: String
});
// compile schema into model
var message = mongoose.message('Message', messageSchema);

router.get('/', function (req, res) {
    res.send("GET messages");
});

router.get('/:id', function (req, res) {
    var id = req.params.id;
    res.send("GET message with :id " + id);
});
//bewaar instantie van nieuw model
router.post('/', function (req, res){
    var newMessage = new message({
        user: req.body.user,
        message: req.body.message
    });
    newMessage.save(function(err, message){
        if(err) return console.error(err);
        res.send(message);

    })
});

module.exports = router;