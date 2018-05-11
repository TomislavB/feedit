const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  date: { type: Date, default: Date.now },
  text: String,
  votes: { type: Number, default: 0 }
});

module.exports = mongoose.model("Article", ArticleSchema);
