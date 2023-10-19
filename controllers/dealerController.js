const { Dealer } = require("../models")
const ApiError = require("../utils/apiError")

const findAllDealers = async (req, res, next) => {
  try {
    const dealers = await Dealer.findAll({
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json({
      status: "Success",
      data: {
        dealers,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const findDealerById = async (req, res, next) => {
  try {
    const dealer = await Dealer.findOne({
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json({
      status: "Success",
      data: {
        dealer,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const updateDealer = async (req, res, next) => {
  const { name } = req.body
  try {
    const updatedDealer = await Dealer.findOne({
      where: {
        id: req.params.id,
      },
    })

    if (!updatedDealer) {
      next(new ApiError("Dealer data not found!", 404))
    }

    await Dealer.update(
      {
        name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )

    res.status(200).json({
      status: "Success",
      message: "Update data successfully!",
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const deleteDealer = async (req, res, next) => {
  try {
    const deletedDealer = await Dealer.findOne({
      where: {
        id: req.params.id,
      },
    })

    if (!deletedDealer) {
      next(new ApiError("Dealer data not found!", 404))
    }

    await Dealer.destroy({
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json({
      status: "Success",
      message: "Delete data successfully",
    })
  } catch (err) {}
}

module.exports = {
  findAllDealers,
  findDealerById,
  updateDealer,
  deleteDealer,
}
