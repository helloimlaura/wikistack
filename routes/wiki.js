const express = require('express');
const router = express.Router();
const { addPage } = require("../views");
const { db, Page, User } = require("../models");
const layout = require("../views/layout");


router.get("/", (req, res, next) => {
    res.send(layout(''));
  });

router.post("/", (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

router.get("/add", (req, res, next) => {
    res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
    const foundPage = await Page.findOne({
        where: {slug: req.params.slug}
      })

      res.json(foundPage);
});

  module.exports = router
