const router = require("express").Router()

const carController = require("../controllers/carController")

router.route("/").post(carController.createCar)

module.exports = router
