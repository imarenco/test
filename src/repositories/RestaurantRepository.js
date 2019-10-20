const axios = require('axios');
const config = require('../config/AppConfigs');

const queryParams = ['city', 'name', 'state', 'country'];

class RestaurantRepository {
  static async getRestaurants(params) {
    const parsedParams = Object
      .keys(params)
      .filter(key => queryParams.includes(key))
      .map(p => `${p}=${params[p]}`).join('&');

    return axios({
      method: 'get',
      url: `${config.restaurantsApi}/restaurants?${parsedParams}`,
      responseType: 'json',
    }).then(res => res.data);
  }
}

module.exports = RestaurantRepository;
