var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) => {
  res.status(404).send({});
});

module.exports = router;
