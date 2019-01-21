var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveyDataSchema = new Schema({
  isActive: {type: Boolean, default: true},
  author: String,
  createdAt: {type: Date, default: Date.now},
  updatedAtList: Array,
  deletedAt: Date,
  surveyType: Number,
  surveyInfo: Object,
  surveyCardList: Array,
});

module.exports = mongoose.model('SurveyData', surveyDataSchema);