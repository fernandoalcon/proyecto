const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const db = req.app.get('db');

    db.query("SELECT * FROM libros", (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

module.exports = router;
