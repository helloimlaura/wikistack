const express = require('express');
const router = express.Router();

const { Page, User } = require("../models");
const { addPage, editPage, errorPage, wikiPage, main } = require("../views");

const layout = require("../views/layout");


router.get("/", async (req, res, next) => {
  try {
    const foundPages = await Page.findAll();
    res.send(main(foundPages));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {

  const [user, wasCreated] = await User.findOrCreate({
    where: {
      name: req.body.name,
      email: req.body.email
    }
  });

  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email
  // });

  if (wasCreated) {
    try {
      await user.save();
    } catch (error) { next(error) }
  }

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
    authorId: user.id  //page.setAuthor is a thing apparently
  });

<<<<<<< HEAD
router.post("/", (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
=======
  try {
    await page.save();
    res.redirect("/wiki/" + page.slug); //don't understand why not /
  } catch (error) { next(error) }

>>>>>>> 810f70bfff8cbca2f009905ba7815ae980fea754
});

router.get("/add", (req, res, next) => {
    res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
    const foundPage = await Page.findOne({
        where: {slug: req.params.slug}
      })

<<<<<<< HEAD
      res.json(foundPage);
});
=======
router.get("/:slug/edit", async (req, res, next) => {
  try {
    const foundPage = await Page.findOne({
      where: {slug: req.params.slug}
    });
    if (foundPage) {
      res.send(editPage(foundPage, await foundPage.getAuthor()));
    } else {
      res.send(errorPage(req.params.slug));
    }
  } catch (error) {
    next(error);
  }
});



router.get("/:slug", async (req, res, next) => {
  try {
      const foundPage = await Page.findOne({
      where: {slug: req.params.slug}
    });
    if (foundPage) {
      res.send(wikiPage(foundPage, await foundPage.getAuthor()));
    } else {
      res.send(errorPage(req.params.slug));
    }
  } catch (error) {
    next(error);
  }
});

>>>>>>> 810f70bfff8cbca2f009905ba7815ae980fea754

module.exports = router;
