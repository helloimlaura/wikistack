const express = require('express');
const router = express.Router();
const { Page, User } = require("../models");
const { userList, userPages } = require("../views/");

router.get("/", async (req, res, next) => {
  try {
    const listOfUsers = await User.findAll();
    res.send(userList(listOfUsers));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    // turns out there is a method: User.findById(req.params.id)
    const user = await User.findOne({
      where: {id: req.params.id}
    });
    const pages = await Page.findAll({
      where: {authorId: user.id}
    });
    res.send(userPages(user, pages));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
