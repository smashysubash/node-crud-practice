const {getUser,addUser} = require('../controller/usercon')
const express = require('express')
const router = express.Router();

router.get('/new',getUser)
router.post('/new',addUser)


module.exports = router;