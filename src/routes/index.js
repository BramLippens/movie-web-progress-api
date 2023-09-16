const express = require("express");

const router = express.Router();

router.use("/history", require("./history"));

module.exports = router;
