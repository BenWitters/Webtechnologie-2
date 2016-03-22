// als je langs deze route komt (bij mongo db, zoek alle /messages) JSON->voor api ->direct
var express = require('express'); // routers kunnen verwerken
var router = express.Router(); // router nodig om een routen op te kunnen koppelen
var controller = require('./../controllers/message');
// schema: klasse -> verplichte structuur creeëren in wepapp -> omzetten naar model (instanties van kunnen maken)

router.get('/', controller.getAll);
router.get('/:id', controller.getId);
router.post('/', controller.create); // doorsturen // verwijst naar module.export
router.put('/:id', controller.updateMessage);
router.delete('/:id', controller.deleteMessage);
router.get('/users/:id', controller.getUserId);
module.exports = router;// router openstellen naar index file, wat publiek toegankelijk maken -> routers moeten terugkomen