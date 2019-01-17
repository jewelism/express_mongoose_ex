var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveyPreviewSchema = new Schema({
  isActive: Number,
  author: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: Array,
  deletedAt: Date,
  surveyType: Number,
  cardList: Array,
});

module.exports = mongoose.model('surveyPreview', surveyPreviewSchema);