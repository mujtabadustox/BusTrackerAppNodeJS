const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { boolean } = require("webidl-conversions");

let directionSchema = new Schema(
  {
    dir: {
      type: String,
    },
  },
  {
    collection: "directions",
  }
);
module.exports = mongoose.model("directions", directionSchema);
