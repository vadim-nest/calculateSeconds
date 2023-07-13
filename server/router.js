const express = require('express');
const calcTimeDifference = require('./utils/calcTimeDifference.js');
const router = express.Router();

router.post('/difference', (req, res) => {
  const { start, end } = req.body;
  const seconds = calcTimeDifference({ timeFirst: start, timeLast: end })
  res.json(seconds);
});

module.exports = router;
