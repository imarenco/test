const BaseRepository = require('./BaseRepository');
const TransactionModel = require('../models/Transaction');

class TransactionRepository extends BaseRepository {
}

module.exports = new TransactionRepository(TransactionModel);
