const express = require('express')
const { saveModul, deleteModul, updateModule, getUpdat } = require('../controllers/modul')

const router = express.Router()


const modulCntrl = require('../controllers/modul')
router.post('/modul', saveModul)
router.get('/modul', modulCntrl.getModuls)
router.delete('/modul/:id', deleteModul)
router.put('/modulupdate/:id', modulCntrl.updateModule)
// router.put('/modulupdate/:id', modulCntrl.updat)

module.exports = router;