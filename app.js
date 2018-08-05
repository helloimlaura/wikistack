const express = require("express");
const morgan = require("morgan");
const wikiRoutes = require("./routes/wiki");
const userRoutes = require("./routes/user");
const { db, Page, User } = require("./models");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
  extended: false
}));

app.use("/wiki", wikiRoutes);
app.use("/users", userRoutes);

// app.get('/', (req, res) => {
//   res.send(layout(''));
// });

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
})

const syncAndConnect = async () => {
  await Page.sync();
  await User.sync();
  console.log("Database is synced");
  const PORT = 1980;
  await app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
  });
};

syncAndConnect();
