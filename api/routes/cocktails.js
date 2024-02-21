const express = require('express');
const router = express.Router();
const sql = require('../db/db.js');

router.post('/cocktails', function(req, res) {
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', "*");
    
    var drinks = req.body;

    const query = `
    SELECT id_cocktail
    FROM ingredients_cocktails
    WHERE id_drink IN (?)
    GROUP BY id_cocktail
    HAVING COUNT(DISTINCT id_drink) = ?
  `;

  const params = [drinks, drinks.length];

    sql.query(query, [params], (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    }
    );

});

module.exports = router;

