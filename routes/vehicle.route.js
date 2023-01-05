let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
const axios = require("axios");
// Vehicle Model
let vehicleSchema = require("../models/vehicle");
// CREATE Vehicle

const getVehicles = async () => {
  const vehiclesList = [];
  const key = "ujAhaYu9dy6TAF2VgMLWK5nnV";
  const response = await axios.get(
    `https://ctabustracker.com/bustime/api/v2/getvehicles?key=${key}&rt=20&format=json`
  );
  const newResponse = response["data"]["bustime-response"]["vehicle"];
  newResponse.map((item) => {
    vehiclesList.push(item);
  });
  //  const collections=vehicleCollection.insertMany(vehiclesList)
};
getVehicles();

router.route("/create-vehicle").post((req, res, next) => {
  vehicleSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Vehicles
router.route("/show-vehicles").get((req, res) => {
  vehicleSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Vehicle
router.route("/show-vehicle/:id").get((req, res) => {
  vehicleSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Vehicle
router.route("/update-vehicle/:id").put((req, res, next) => {
  vehicleSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Vehicle updated successfully !");
      }
    }
  );
});
// Delete Vehicle
router.route("/delete-vehicle/:id").delete((req, res, next) => {
  vehicleSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = router;
