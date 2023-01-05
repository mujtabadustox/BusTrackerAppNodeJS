const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { boolean } = require("webidl-conversions");

let routeSchema = new Schema(
  {
    rt: {
      type: String,
    },
    rtnm: {
      type: String,
    },
    rtclr: {
      type: String,
    },
    rtdd: {
      type: String,
    },
    hdg: {
      type: String,
    },
  },
  {
    collection: "routes",
  }
);
module.exports = mongoose.model("route", routeSchema);
