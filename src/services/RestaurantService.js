const RestaurantRepository = require('../repositories/RestaurantRepository');


class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async getRestaurants(payload = {}) {
    const restaurants = await this.repository.getRestaurants(payload);

    return restaurants;
  }
}

module.exports = new UserService(RestaurantRepository);
