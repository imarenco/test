const Router = require('express').Router();

// controllers
const UserController = require('./controllers/UserController');
const RestaurantController = require('./controllers/RestaurantController');
const TransactionController = require('./controllers/TransactionController');

// schema validator
const SchemaValidator = require('./utils/schemaValidator');
const UserSchema = require('./schemas/UserSchema');

// auth
const Auth = require('./utils/auth');


Router.post('/user/register',
  SchemaValidator.validateIncomingData(UserSchema),
  UserController.registerUser);

Router.post('/user/login',
  SchemaValidator.validateIncomingData(UserSchema),
  UserController.loginUser);

Router.get('/restaurant',
  Auth.login,
  RestaurantController.getRestaurantByCords);

Router.get('/transaction',
  TransactionController.getTransactions);

module.exports = Router;
