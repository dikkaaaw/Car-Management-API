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

    res.status(200).json({
      status: "Success",
      message: "Data added successfully!",
      data: {
        newCar,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const findAllCars = async (req, res, next) => {
  try {
    const car = await Car.findAll()

    res.status(200).json({
      status: "Success",
      data: {
        car,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const findCarById = async (req, res, next) => {
  try {
    const car = await Car.findOne({
      where: {
        id: req.params.id,
      },
    })

    if (!car) {
      next(new ApiError("Car not found!", 404))
    }

    res.status(200).json({
      status: "Success",
      message: "Data found!",
      data: {
        car,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const deleteCar = async (req, res, next) => {
  try {
    const deleteCar = Car.findOne({
      where: {
        id: req.params.id,
      },
    })

    if (!deleteCar) {
      next(new ApiError("Car not found!", 404))
    }

    await Car.destroy({
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json({
      status: "Success",
      message: "Car data has been deleted!",
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const updateCar = async (req, res, next) => {
  const { name, price, category } = req.body
  try {
    const updateCar = Car.update(
      {
        name,
        price,
        category,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )

    if (!updateCar[0] === 0) {
      next(new ApiError("Car not found!", 404))
    }

    res.status(200).json({
      status: "Success",
      message: "Car data updated successfully!",
      data: {
        updateCar,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

module.exports = {
  createCar,
  findAllCars,
  findCarById,
  deleteCar,
  updateCar,
}
