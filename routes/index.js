const router = require("express").Router()

const carRouter = require("./carRouter")
const userRouter = require("./userRouter")
const authRouter = require("./authRouter")
const adminRouter = require("./adminRouter")

router.use("/cars", carRouter)
router.use("/user", userRouter)
router.use("/auth", authRouter)
router.use("/admin", adminRouter)

module.exports = router
