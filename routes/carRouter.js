const router = require("express").Router()

const carController = require("../controllers/carController")

router
  .route("/")
  .post(carController.createCar)
  .get(carController.findAllCars)

module.exports = router
