var express = require('express');
var router = express.Router();

const mongo = require('../../db/mongo/config/mongo');
var SurveyData = require('../../db/mongo/models/surveyData');

router.post('/', async (req, res, next) => {
  try {
    const {author, surveyType, surveyInfo, surveyCardList} = req.body;
    await mongo();
    const surveyPreview = new SurveyData({
      isActive: true,
      author,
      surveyType,
      surveyInfo,
      surveyCardList,
    });
    await surveyPreview.save();
    res.status(200).send({ok: true});
  } catch (e) {
    console.error(e);
    res.status(500).send({});
  }
});

module.exports = router;
