const express = require('express');
const bodyParser = require('body-parser')
const routeControl = require('./route-control');

const router = express.Router()

router.post('/person', routeControl.findPerson)
router.post('/add', routeControl.addPerson)
router.post('/completed', routeControl.updateCompleted)

module.exports = router