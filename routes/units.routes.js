const express = require('express')
const { saveUnit, deleteUnit, updateUnit, getUnits } = require('../controllers/units.controller')

const router = express.Router()


const UnitsCtrl = require('../controllers/modul')
router.post('/saveunit', saveUnit)
router.get('/unit', getUnits)
router.delete('/unit/:id',deleteUnit)
router.put('/unitupdate/:id', updateUnit)

module.exports = router;