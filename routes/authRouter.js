const router = require("express").Router()

const Authenticate = require("../middlewares/authenticate")
const Auth = require("../controllers/authController")

router.post("/register", Authenticate, Auth.register)

module.exports = router
