const router = require("express").Router()

const carController = require("../controllers/carController")
const checkRole = require("../middlewares/checkRole")

router
  .route("/")
  .post(checkRole("Superadmin", "Admin"), carController.createCar)
  .get(checkRole("Superadmin", "Admin"), carController.findAllCars)

router
  .route("/:id")
  .get(checkRole("Superadmin", "Admin"), carController.findCarById)
  .delete(checkRole("Superadmin", "Admin"), carController.deleteCar)
  .patch(checkRole("Superadmin", "Admin"), carController.updateCar)

module.exports = router
