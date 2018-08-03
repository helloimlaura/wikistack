const express = require('express');
const router = express.Router();
const { addPage } = require("../views");
// const { db, Page, User } = require("../models");
const layout = require("../views/layout");


router.get("/", (req, res, next) => {
    res.send(layout(''));
  });

router.post("/", (req, res, next) => {
    res.json(req.body);
});

router.get("/add", (req, res, next) => {
    res.send(addPage());
});



  module.exports = router
