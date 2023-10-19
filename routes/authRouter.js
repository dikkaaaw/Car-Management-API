const router = require("express").Router()

const Auth = require("../controllers/authController")
const Authenticate = require("../middlewares/authenticate")

router.post("/register", Auth.register)
router.post("/login", Auth.login)

module.exports = router
