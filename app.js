const express = require("express");
const morgan = require("morgan");
// const routes = require("./routes/posts");

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
})


const PORT = 1980;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
