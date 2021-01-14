const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const contentSchema = new Schema({
  id: Number,
  title: String,
  author: String,
  body: String
});

const contentModel = mongoose.model("Content", contentSchema);

module.exports = contentModel;
