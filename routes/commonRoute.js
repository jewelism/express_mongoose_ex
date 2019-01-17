const generateRoute = (routeDirName) => {
  const express = require('express');
  const router = express.Router();

  const find = require(`./${routeDirName}/find`);
  router.use('/', find);

  const save = require(`./${routeDirName}/save`);
  router.use('/', save);
  return router;
};

module.exports = generateRoute;