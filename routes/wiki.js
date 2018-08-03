const express = require('express');
const router = express.Router();
const { Page } = require("../models");
const { addPage, wikiPage } = require("../views");
const layout = require("../views/layout");


router.get("/", (req, res, next) => {
    res.send(layout(''));
  });

router.post("/", async (req, res, next) => {

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  });

  try {
    await page.save();
    res.redirect('/' + page.slug);
  } catch (error) { next(error) }

});

router.get("/add", (req, res, next) => {
    res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
      const foundPage = await Page.findOne({
      where: {slug: req.params.slug}
    });
    res.send(wikiPage(foundPage, 'author'));
  } catch (error) {
    next(error);
  }

})

module.exports = router
