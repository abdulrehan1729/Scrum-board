const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema & model

const ScrumBoardSchema = new Schema({
  name: {
    type: String
  },
  tasks: {
    type: String
  }
});

const ScrumBoard = mongoose.model("scrum_board1", ScrumBoardSchema);

module.exports = ScrumBoard;
