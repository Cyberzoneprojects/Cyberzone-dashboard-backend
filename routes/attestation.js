const express = require('express')

const router = express.Router()


const {attestation} = require('../controllers/attestation')
router.post('/attestation', attestation)

module.exports = router;
