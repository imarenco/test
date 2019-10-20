module.exports = {
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://mongo:27017/test',
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
  },
  port: process.env.PORT || 8080,
  secret: process.env.SECRET || 'secret',
  secretEncrypt: process.env.SECRET_ENCRYPT || '4FD4BCFCE47A8DBFF5F3288898DF72FF',
  restaurantsApi: process.env.RESTAURANT_API || 'http://opentable.herokuapp.com/api',
};
