const mongoose = require("mongoose");

const ScrumSchema = mongoose.Schema(
  {
    name: String,
    title: String,
    content: String,
    status: String,
    is_deleted: Boolean
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Scrum", ScrumSchema);
