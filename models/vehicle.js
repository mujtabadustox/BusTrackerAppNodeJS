const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { boolean } = require("webidl-conversions");

let vehicleSchema = new Schema(
  {
    vid: {
      type: String,
    },
    tmstmp: {
      type: String,
    },
    lat: {
      type: String,
    },
    lon: {
      type: String,
    },
    hdg: {
      type: String,
    },
    pid: {
      type: Number,
    },
    rt: {
      type: String,
    },
    des: {
      type: String,
    },
    pdist: {
      type: Number,
    },
    dly: {
      type: Boolean,
    },
    tatripid: {
      type: String,
    },
    origtatripno: {
      type: String,
    },
    tablockid: {
      type: String,
    },
    zone: {
      type: String,
    },
  },
  {
    collection: "vehicles",
  }
);
module.exports = mongoose.model("vehicles", vehicleSchema);
