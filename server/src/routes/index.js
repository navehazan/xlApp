const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/xls", require("./xls"));

module.exports = router;
