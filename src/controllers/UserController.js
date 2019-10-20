const md5 = require('md5');
const UserService = require('../services/UserService');
const TransactionService = require('../services/TransactionService');
const auth = require('../utils/auth');
const CONSTS = require('../utils/consts');

const UserController = module.exports;

UserController.registerUser = async (req, res) => {
  try {
    const user = await UserService.create({
      username: req.body.username,
      password: md5(req.body.password),
    });

    res.status(204).send();

    TransactionService.create({ type: CONSTS.transactioNames.register, description: `register user ${user.username}` });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

UserController.loginUser = async (req, res) => {
  try {
    const user = await UserService.findOne({
      username: req.body.username,
      password: md5(req.body.password),
    });

    if (user) {
      res.status(200).send({
        username: user.username,
        token: auth.sign({ identifier: user._id }),
      });

      TransactionService.create({
        type: CONSTS.transactioNames.login,
        description: `login user ${user.username}`,
      });
    } else {
      res.status(404).send();
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};
