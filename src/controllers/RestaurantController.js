const RestaurantService = require('../services/RestaurantService');
const TransactionService = require('../services/TransactionService');
const CONSTS = require('../utils/consts');

const RestaurantController = module.exports;

RestaurantController.getRestaurantByCords = async (req, res) => {
  try {
    const restaurants = await RestaurantService.getRestaurants(req.query);
    res.status(200).send(restaurants);

    TransactionService
      .create({
        type: CONSTS.transactioNames.restaurants,
        description: `Get restaurants by query ${JSON.stringify(req.query)}`,
      });
  } catch (e) {
    res.status(500).send(e.message);
  }
};
