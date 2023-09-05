const express = require('express');
const router = express.Router();
// const ensureLoggedIn = require('../../config/ensureLoggedIn')
const ticketCtrl = require('../../controllers/api/ticket')
// router.get('/tickets', ticketCtrl.index)
//I N D U C E
//Index New Delete Update Create Edit Show
router.get('/tickets',ticketCtrl.getUserTickets)
router.post('/tickets', ticketCtrl.create)
console.log('routes')

// router.get('/tickets/:id',ticketCtrl.show)


module.exports = router