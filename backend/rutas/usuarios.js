const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/login", (req, res) => {
    const db = req.app.get("db");
    const { usuario, password } = req.body;

    db.query(
        "SELECT * FROM usuarios WHERE usuario=?",
        [usuario],
        (err, result) => {
            if (err) throw err;

            if (result.length === 0) {
                return res.json({ success: false, message: "Usuario incorrecto" });
            }

            const user = result[0];
            const ok = bcrypt.compareSync(password, user.password);

            if (!ok) {
                return res.json({ success: false, message: "Contraseña incorrecta" });
            }

            res.json({ success: true, user });
        }
    );
});

router.get("/", (req, res) => {
    const db = req.app.get("db");

    db.query("SELECT * FROM usuarios", (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

module.exports = router;
