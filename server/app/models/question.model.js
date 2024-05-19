const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  id: Number,
  qtype: String,
  urltitle: String,
  fulltitle: String,
  qtext: String,
  metadata: Object,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
