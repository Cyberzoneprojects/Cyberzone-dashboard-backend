const express = require('express');

const router = express.Router();


const {moduleData} = require('../controllers/module');
router.post('/moduleData', moduleData);

module.exports = router;