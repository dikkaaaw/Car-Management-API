const bcrypt = require("bcrypt")
const { Auth, Admin } = require("../models")
const ApiError = require("../utils/apiError")

const addAdmin = async (req, res, next) => {
  try {
    const { name, email, password, role, age, address, dealerId } =
      req.body

    const existingUser = await Auth.findOne({
      where: {
        email,
      },
    })

    if (existingUser) {
      return next(new ApiError("Email has already been taken!", 400))
    }

    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    const newAdmin = await Admin.create({
      name,
      age,
      address,
      role,
      dealerId,
    })

    await Auth.create({
      email,
      password: hashedPassword,
      role,
      userId: newAdmin.id,
      adminId: newAdmin.id,
    })

    res.status(201).json({
      status: "Success",
      data: {
        ...newAdmin,
        email,
        password: hashedPassword,
        role,
        dealerId,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

module.exports = {
  addAdmin,
}
