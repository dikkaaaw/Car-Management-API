const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Auth, User } = require("../models")
const ApiError = require("../utils/apiError")

const register = async (res, req, next) => {
  try {
    const { name, email, password, confirmPassword } =
      req.body

    const user = await Auth.findOne({
      where: {
        email,
      },
    })

    if (user) {
      next(new ApiError("Email has already taken!", 400))
    }

    const passwordLength = password <= 6
    if (passwordLength) {
      next(
        new ApiError(
          "The password must be at least 6 characters!",
          400
        )
      )
    }

    if (password !== confirmPassword) {
      next(new ApiError("Password doesn't match!", 400))
    }

    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(
      password,
      saltRounds
    )
    const hashedConfirmPassword = bcrypt.hashSync(
      confirmPassword,
      saltRounds
    )

    const newUser = await User.create({
      name,
      age,
      address,
      dealerId: req.user.dealerId,
    })

    const newAuth = await Auth.create({
      email,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
      userId: newUser.id,
    })

    res.status(200).json({
      status: "Success",
      data: {
        ...newUser,
        email,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

const login = async (req, res, next) => {
  const { name, email, password, confirmPassword } =
    req.body
}

module.exports = {
  register,
}
