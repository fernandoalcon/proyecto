const express = require("express");
const router = express.Router();

router.use(require("./usuarios"));
router.use(require("./libros"));
router.use(require("./reportes"));

module.exports = router;
