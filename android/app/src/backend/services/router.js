const express = require('express');
const router = new express.Router();
const realtime = require('../controllers/realtime.js');

router.route('/realtime/:id?')
    .get(realtime.get);

module.exports = router;

