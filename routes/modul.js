const express = require('express')
const { saveModul, deleteModul } = require('../controllers/modul')

const router = express.Router()


const modulCntrl = require('../controllers/modul')
router.post('/modul', saveModul)
router.get('/modul', modulCntrl.getModuls)
router.delete('modul/:id', deleteModul)

module.exports = router;