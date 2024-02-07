const express = require('express');
const router = express.Router();
const sql = require('../db/db.js');

router.get('/alcools', function(req, res) {
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', "*");

    sql.query("SELECT * FROM drinks WHERE type='ALCOOL'", (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    }
    );
    
});

module.exports = router;

