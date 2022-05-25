const express = require('express')
const router = express.Router()


const resCtrl = require('../controllers/resource.controllers')
router.post('/resource', resCtrl.saveRes)
router.get('/resource', resCtrl.getRes)
router.delete('/resource/:id', resCtrl.deleteRes)
router.put('/resourceupdate/:id', resCtrl.updateRes)

module.exports = router;