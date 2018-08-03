const express = require("express");
const morgan = require("morgan");
// const routes = require("./routes/posts");
const { db, Page, User } = require("./models");

const app = express();
const layout = require("./views/layout");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
  extended: false
}));

// app.use("/posts", routes);

// more middleware goes here

app.get('/', (req, res) => {
  res.send(layout(''));
});

// db.authenticate(). // this was just to check
// then(() => {
//   console.log('connected to the database');
// });

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
