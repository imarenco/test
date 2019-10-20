const Joi = require('joi');

module.exports = Joi.object().keys({
  username: Joi.string().trim().min(5).max(80)
    .required(),
  password: Joi.string().min(5).required(),
}).with('username', 'password');
