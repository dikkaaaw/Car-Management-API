const router = require("express").Router()

const carController = require("../controllers/carController")

router
  .route("/")
  .post(carController.createCar)
  .get(carController.findAllCars)

router
  .route("/:id")
  .get(carController.findCarById)
  .delete(carController.deleteCar)
  .patch(carController.updateCar)

module.exports = router
