const router = require("express").Router()

const Admin = require("../controllers/adminController")

const authenticate = require("../middlewares/authenticate")
const checkRole = require("../middlewares/checkRole")

router.post("/add", Admin.addAdmin)

module.exports = router
