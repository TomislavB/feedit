const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(3001, () => {
  console.log("App Successful listening on port 3001");
});

const mongoose = require("mongoose");
mongoose.connect(process.env.DB, function(err, response) {
  if (err) {
    console.log("Failed to connect");
  } else {
    console.log("Connected to db");
  }
}); // this is where you connect to your mlab database

const Article = require("./articleModel.js");

app.get("/articles", (req, res) => {
  Article.find((err, articles) => {
    if (err) console.log(handleError(err));
    res.json(articles);
  });
});

app.post("/articles", (req, res) => {
  Article.create(
    {
      title: req.body.title,
      author: req.body.author,
      text: req.body.text,
      url: req.body.url
    },
    (err, articles) => {
      if (err) console.log(handleError(err));
      Article.find((err, articles) => {
        if (err) console.log(handleError(err));
        res.json(articles);
      });
    }
  );
});

app.put("/articles/:id", (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    article.update(req.body, (err, articles) => {
      if (err) console.log(handleError(err));
      Article.find((err, articles) => {
        if (err) console.log(handleError(err));
        res.json(articles);
      });
    });
  });
});

app.delete("/articles/:id", (req, res) => {
  Article.remove(
    {
      _id: req.params.id
    },
    (err, articles) => {
      if (err) console.log(handleError(err));
      Article.find((err, articles) => {
        if (err) console.log(handleError(err));
        res.json(articles);
      });
    }
  );
});
