const express = require('express');
const router = express.Router();
const sql = require('../db/db.js');

router.post('/cocktails', function(req, res) {
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', "*");
    
    const requestedDrinks = req.body;

    const query = `
    SELECT id_cocktail
    FROM ingredients_cocktails
    WHERE id_drink IN (?)
    `;
    

    sql.query(query, [requestedDrinks], (error, cocktails, fields) => {
        if (error) {
            return res.status(500).json({ error });
        }

        const promises = cocktails.map(cocktail => {
            return new Promise((resolve, reject) => {
                const cocktailId = cocktail.id_cocktail;

                const getDrinkNamesQuery = `
                SELECT drinks.id, drinks.name
                FROM ingredients_cocktails
                INNER JOIN drinks ON ingredients_cocktails.id_drink = drinks.id
                WHERE id_cocktail = ?
                `;

                sql.query(getDrinkNamesQuery, [cocktailId], (error, results, fields) => {
                    if (error) {
                        reject(error);
                    }

                    const actualDrinks = results.map(drink => ({
                        id: drink.id,
                        name: drink.name,
                        requested: requestedDrinks.includes(drink.id)
                    }));

                    // Calculer le nombre de boissons non demandées
                    const missingDrinksCount = actualDrinks.filter(drink => !drink.requested).length;

                    resolve({
                        cocktailId: cocktailId,
                        drinks: actualDrinks,
                        missingDrinksCount: missingDrinksCount
                    });
                });
            });
        });

        Promise.all(promises)
            .then(cocktailInfo => {
                const cocktailIds = cocktailInfo.map(info => info.cocktailId);
                const query = `
                SELECT * 
                FROM cocktails 
                WHERE id IN (?)
                `;
                sql.query(query, [cocktailIds], (error, results, fields) => {
                    if (error) {
                        return res.status(500).json({ error });
                    }

                    const finalResults = results.map(cocktail => {
                        const info = cocktailInfo.find(info => info.cocktailId === cocktail.id);
                        return {
                            ...cocktail,
                            drinks: info.drinks,
                            missingDrinksCount: info.missingDrinksCount
                        };
                    });
                    res.json(finalResults);
                });
            })
            .catch(error => {
                res.status(500).json({ error });
            });
    });
});

router.get('/cocktails/:id', function(req, res) {
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', "*");

    const cocktailId = req.params.id;

    const getDrinkNamesQuery = `
    SELECT drinks.id, drinks.name
    FROM ingredients_cocktails
    INNER JOIN drinks ON ingredients_cocktails.id_drink = drinks.id
    WHERE id_cocktail = ?
    `;

    sql.query(getDrinkNamesQuery, [cocktailId], (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error });
        }

        const drinks = results.map(drink => ({
            id: drink.id,
            name: drink.name
        }));

        const getCocktailQuery = `
        SELECT * 
        FROM cocktails 
        WHERE id = ?
        `;

        sql.query(getCocktailQuery, [cocktailId], (error, results, fields) => {
            if (error) {
                return res.status(500).json({ error });
            }

            const cocktail = results[0];
            res.json({ ...cocktail, drinks });
        });
    });
});

module.exports = router;
