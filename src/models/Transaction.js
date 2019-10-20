const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  description: {
    type: String,
  },
});

const User = mongoose.model('Transaction', UserSchema);

module.exports = User;
