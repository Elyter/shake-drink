const express = require('express');
const router = express.Router();
const sql = require('../db/db.js');

router.post('/addCocktail', function(req, res) {
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', "*");

    title = req.body.title
    desc = req.body.description
    drinks = req.body.drinks

    const onlyLettersPattern = /^[A-Za-z]+$/;

    if(!title.match(onlyLettersPattern) || !desc.match(onlyLettersPattern)){
        return res.status(400).json({ err: "No special characters and no numbers, please!"})
    } else {
        drinks.forEach(element => {
            sql.query("SELECT * FROM drinks WHERE id = ?", [element[0]], (error, results, fields) => {
                if (error) {
                    return res.status(500).json({ error });
                }
                if(results.length == 0){
                    return res.status(400).json({ err: "Drink not found"})
                }
            });
            if (typeof element[1] !== 'number' || element[1] < 0){
                return res.status(400).json({ err: "Quantity must be a positive number"})
            } else if (element[2] !== "cl" && element[2] !== "ml"){
                return res.status(400).json({ err: "Unit must be cl or ml"})
            }
        });
        const addCocktailQuery = `
        INSERT INTO cocktails (title, description)
        VALUES (?, ?)
        `;

        const addIngredientsQuery = `
        INSERT
        INTO ingredients_cocktails (id_cocktail, id_drink, quantity, unity)
        VALUES (?, ?, ?, ?)
        `;

        sql.query(addCocktailQuery, [title, desc], (error, results, fields) => {
            if (error) {
                return res.status(500).json({ error });
            }
            const cocktailId = results.insertId;
            const promises = drinks.map(drink => {
                return new Promise((resolve, reject) => {
                    sql.query(addIngredientsQuery, [cocktailId, drink[0], drink[1], drink[2]], (error, results, fields) => {
                        if (error) {
                            reject(error);
                        }
                        resolve();
                    });
                });
            });
            Promise.all(promises)
                .then(() => {
                    res.json({ msg: "Cocktail added successfully!"})
                })
                .catch(error => {
                    return res.status(500).json({ error });
                });
        });

    }
    
});

module.exports = router;

