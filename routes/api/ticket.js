const express = require('express');
const router = express.Router();
// const ensureLoggedIn = require('../../config/ensureLoggedIn')
const ticketCtrl = require('../../controllers/api/ticket')
router.get('/tickets', ticketCtrl.index)
router.post('/tickets', ticketCtrl.create)
console.log('routes')

// router.get('/tickets/:id',ticketCtrl.show)


module.exports = router