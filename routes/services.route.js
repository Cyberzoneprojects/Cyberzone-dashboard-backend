const express = require('express')
// const { saveService, deleteService, updateService, getServices } = require('../controllers/service.controller')

const router = express.Router()


const serviceCtrl = require('../controllers/service.controller')
const { saveService, deleteService, updateService } = require('../controllers/service.controller')
router.post('/service', saveService)
router.get('/service', serviceCtrl.getServices)
router.delete('/service/:id', deleteService)
router.put('/serviceupdate/:id', serviceCtrl.updateService)
// router.put('/modulupdate/:id', modulCntrl.updat)

module.exports = router;