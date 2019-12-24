const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
const ScrumBoard = require("./models/create_scrum");

const app = express();
const port = 4000;

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to EasyTasks application. Take note quickly. Organize and keep track of all your tasks."
  });
});

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

require("./routes/scrum.routes.js")(app);

app.listen(port, () => {
  console.log(`Server is litsening at ${port}`);
});
