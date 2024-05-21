const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

newsRouter.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_URL}`
    );
    const articles = result.data.articles;
    res.render("app", { articles });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching news");
  }
});
newsRouter.post("/search", async (req, res) => {
  const search = req.body.content;

  try {
    var url = `https://newsapi.org/v2/top-headlines?country=us${search}&apiKey=${API_URL}`;

    const news_get = await axios.get(url);
    res.render("news", { articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
});

module.exports = newsRouter;
