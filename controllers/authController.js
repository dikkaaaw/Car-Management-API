const { Auth } = require("../models")
const ApiError = require("../utils/apiError")

const login = async (req, res, next) => {
  const { name, email, password, confirmPassword } =
    req.body
}
