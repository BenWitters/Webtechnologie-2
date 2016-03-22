var Message = require('./../models/message.js');

// get all messages
function getAll(req, res){ //2x /messages -> enkel typen wat achter /messages komt -> zit al in /messages -> /messages/
    Message.find(function(err,messages){// zoeken in database
        res.send(messages); //lijst terugkrigjen met alle messages

    });
}
module.exports.getAll = getAll; // specifieke functie teruggeven

// get message by id
function getId(req, res){

    Message.findById(req.params.id, function(err,message){// zoeken in database

        res.send(message);
    });

}
module.exports.getId = getId;

//post message
function create(req, res){
    // als er gepost wordt
    // querie en nieuwe message kunnen saven
    var m = new Message({
        user: req.body.user,
        message: req.body.message
    }); // nieuwe istantie van message
    m.save(function (err, message) { // save -> insert(query) in  mongodb -> 2 dingen terug krijgen -> error of result(message)
        res.send(message); //teruggeven
    });
}
module.exports.create = create; // specifieke functie teruggeven, als de functie aangeroepen wordt, neem dan de craete functie


//update message per id
function updateMessage(req, res){
    var messageId = Message.findById(req.params.id);
    var message = req.body;
    Message.findOneAndUpdate(messageId, message, {}, function(err, update){
        if(err){
            console.log("error");
        }
        res.send(update);
    });

}
module.exports.updateMessage = updateMessage; // specifieke functie teruggeven, als de functie aangeroepen wordt, neem dan de craete functie

// delete message per id
function deleteMessage(req, res){
    var id = Message.findById(req.params.id);
    Message.remove(id, function(err, message){
        if(err){
            console.log("error");
        }
        res.send(message);
    });
}
module.exports.deleteMessage = deleteMessage;

// get userId
function getUserId(req, res){
    Message.find(req.body, function(err,message){// zoeken in database
        var mess = new Message({
                user: req.params.user
        });
        res.send(mess);
    });
}
module.exports.getUserId = getUserId;