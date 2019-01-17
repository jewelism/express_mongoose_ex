var express = require('express');
var router = express.Router();

const mongo = require('../../db/mongo/config/mongo');
var SurveyPreview = require('../../db/mongo/models/surveyPreview');

router.post('/', async (req, res, next) => {
  try {
    throw Error('fxxx!');
    const {author, cardList} = req.body;
    await mongo();
    const surveyPreview = new SurveyPreview({
      isActive: true,
      author,
      cardList,
    });
    await surveyPreview.save();
    res.status(200).send({ok: true});
  } catch (e) {
    console.error(e);
    res.status(500).send({});
  }
});

module.exports = router;
