const mongoose = require('mongoose')
const {Schema} = mongoose

const FDdetailSchema = new Schema({
  InterestRate: {
    type: Number,
    required: true,
  },
  tenure: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('fd_details', FDdetailSchema);