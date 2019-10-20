const service = require('../services/TransactionService');

const TransactionController = module.exports;

TransactionController.getTransactions = async (req, res) => {
  try {
    const transactions = await service.find(req.query);
    res.status(200).send(transactions);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
