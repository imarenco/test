const TransactionRepository = require('../repositories/TransactionRepository');


class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(payload = {}) {
    const user = await this.repository.create(payload);

    return user;
  }

  async find(params = {}) {
    const user = await this.repository.find(params);

    return user;
  }
}

module.exports = new UserService(TransactionRepository);
