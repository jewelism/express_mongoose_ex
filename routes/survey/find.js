var express = require('express');
var router = express.Router();

const mongo = require('../../db/mongo/config/mongo');
var SurveyPreview = require('../../db/mongo/models/surveyPreview');

router.get('/:state', async (req, res, next) => {
  const {state} = req.params;
  try {
    await mongo();
    const data = await SurveyPreview.find({state: state});
    res.status(200).send(data);
  } catch (e) {
    console.error('err', e);
    res.status(500).send(e);
  }
});

module.exports = router;
