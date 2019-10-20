const BaseRepository = require('./BaseRepository');
const UserModel = require('../models/UserModel');

class UserRepository extends BaseRepository {
}

module.exports = new UserRepository(UserModel);
