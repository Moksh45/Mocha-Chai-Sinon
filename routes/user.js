const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/userCtrl')

router.get('/',userCtrl.userList)

router.get('/data',userCtrl.data)

module.exports = router