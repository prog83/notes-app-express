const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ uptime: process.uptime() });
});

module.exports = router;
