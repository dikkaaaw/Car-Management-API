const express = require("express")
const { Car } = require("../models/index")
const ApiError = require("../utils/apiError")

const createCar = async (req, res, next) => {
  const { name, price, category } = req.body
  try {
    const car = await Car.create({
      name,
      price,
      category,
    })

    res.status(400).json({
      status: "Success",
      message: "Data berhasil ditambahkan!",
    })
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

module.exports = {
  createCar,
}
