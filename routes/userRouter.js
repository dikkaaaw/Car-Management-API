const router = require("express").Router()

const userController = require("../controllers/userController")

router.route("/").get(userController.findUsers)

router
  .route("/:id")
  .get(userController.findUserById)
  .delete(userController.deleteUser)
  .patch(userController.updateUser)

module.exports = router
