const express = require('express');
const router = express.Router();
const sql = require('../db/db.js');

router.post('/cocktails', function(req, res) {
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', "*");
});

module.exports = router;

