const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  text: String,
  votes: { type: Number, default: 0 }
});

module.exports = mongoose.model("Article", ArticleSchema);
