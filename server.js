const dotenv = require("dotenv")
dotenv.config()

const app = require("./index")

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
