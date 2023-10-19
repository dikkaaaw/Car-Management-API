const express = require("express")
const morgan = require("morgan")
const session = require("express-session")
const flash = require("connect-flash")
const bodyParser = require("body-parser")

const carRouter = require("./routes/carRouter")
const userRouter = require("./routes/userRouter")
const authRouter = require("./routes/authRouter")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan("dev"))
app.use(express.static(`${__dirname}/public`))

app.use(
  session({
    secret: "test",
    saveUninitialized: true,
    resave: true,
  })
)
app.use(flash())

app.use("/cars", carRouter)
app.use("/user", userRouter)
app.use("/auth", authRouter)

module.exports = app
