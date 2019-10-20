const Joi = require('joi');

const SchemaValidator = module.exports;

SchemaValidator.validateIncomingData = schema => (
  (req, res, next) => {
    const data = { ...req.query, ...req.body };
    const validation = Joi.validate(data, schema);
    if (validation.error) {
      res.status(400).json(validation.error);
    } else {
      next();
    }
  }
);
