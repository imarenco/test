const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(payload = {}) {
    const user = await this.repository.create(payload);

    return user;
  }

  async findOne(params = {}) {
    const user = await this.repository.findOne(params);

    return user;
  }
}

module.exports = new UserService(UserRepository);
