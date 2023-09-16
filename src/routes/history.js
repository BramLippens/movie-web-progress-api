const express = require("express");

const router = express.Router();

const getAllHistory = async (req, res) => {
  res.json({
    message: "Hello World",
  });
};

router.get("/", getAllHistory);

module.exports = router;
