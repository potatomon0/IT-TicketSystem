const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', 
// [
//     check('email', 'Plase use a domain email').isEmail()
// ], async(req,res)=>{
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({ errors: errors.array() })
//     }
    usersCtrl.create
// }
);
// router.post('/login',usersCtrl.login)
router.post('/login', usersCtrl.login)
// GET /api/users/check-token
router.get('/check-token',ensureLoggedIn, usersCtrl.checkToken)


module.exports = router;