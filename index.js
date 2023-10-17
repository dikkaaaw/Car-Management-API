const express = require("express")
const morgan = require("morgan")
const session = require("express-session")
const flash = require("connect-flash")

const carRouter = require("./routes/carRouter")

const app = express()

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

app.use("/", carRouter)

module.exports = app
