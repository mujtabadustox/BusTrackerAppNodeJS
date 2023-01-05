const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { boolean } = require("webidl-conversions");

let patternsSchema = new Schema(
  {
    pid: {
      type: Number,
    },
    ln: {
      type: Number,
    },
    rtdir: {
      type: String,
    },
    pt: {
      type: Array,
    },
  },
  {
    collection: "patterns",
  }
);
module.exports = mongoose.model("patterns", patternsSchema);
