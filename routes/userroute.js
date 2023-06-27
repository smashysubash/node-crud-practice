const {getUser} = require('../controller/usercon')
const express = require('express')
const router = express.Router();

router.get('/',getUser)


module.exports = router;