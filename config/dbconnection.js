const mongoose = require('mongoose')

const mongoconnection = () => {
  console.log('connected')
  return mongoose.connect('mongodb://localhost:27017/growwchatbot');
};

module.exports = mongoconnection
