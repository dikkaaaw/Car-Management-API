const { Car } = require("../models/index")
const ApiError = require("../utils/apiError")

const createCar = async (req, res, next) => {
  const { name, price, category } = req.body
  try {
    const newCar = await Car.create({
      name,
      price,
      category,
    })

    res.status(400).json({
      status: "Success",
      message: "Data berhasil ditambahkan!",
      data: {
        newCar,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

const findAllCars = async (req, res, next) => {
  try {
    const car = await Car.findAll()

    res.status(400).json({
      status: "Success",
      data: {
        car,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

const findCarById = async (req, res, next) => {
  const id = req.params.id
  try {
    const car = await Car.findOne({
      where: {
        id: req.params.id,
      },
    })

    if (!car) {
      next(
        new ApiError(`Car with id ${id} not found!`, 404)
      )
    }

    res.status(400).json({
      status: "Success",
      message: "Data found!",
      data: {
        car,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

module.exports = {
  createCar,
  findAllCars,
  findCarById,
}
