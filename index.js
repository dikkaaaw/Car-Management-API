const express = require("express")
const morgan = require("morgan")
const session = require("express-session")
const flash = require("connect-flash")
const bodyParser = require("body-parser")

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

module.exports = app
