const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const db = req.app.get("db");

    db.query("SELECT * FROM reportes", (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

router.post("/", (req, res) => {
    const db = req.app.get("db");
    const { descripcion, fecha } = req.body;

    db.query(
        "INSERT INTO reportes (descripcion, fecha) VALUES (?, ?)",
        [descripcion, fecha],
        (err) => {
            if (err) throw err;
            res.json({ success: true });
        }
    );
});

module.exports = router;
