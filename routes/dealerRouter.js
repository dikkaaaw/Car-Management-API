const router = require("express").Router()

const Dealer = require("../controllers/dealerController")

router.route("/").get(Dealer.findAllDealers)
router
  .route("/:id")
  .get(Dealer.findDealerById)
  .patch(Dealer.updateDealer)
  .delete(Dealer.deleteDealer)

module.exports = router
