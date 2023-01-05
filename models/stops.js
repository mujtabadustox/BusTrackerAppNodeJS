const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { boolean } = require("webidl-conversions");

let stopsSchema = new Schema(
  {
    stpid: {
      type: String,
    },
    stpnm: {
      type: String,
    },
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
  },
  {
    collection: "stops",
  }
);
module.exports = mongoose.model("stops", stopsSchema);
