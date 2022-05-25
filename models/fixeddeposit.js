const mongoose = require('mongoose');
const {Schema} = mongoose;

const FDSchema = new Schema({
  BankName:{
    type: String,
    required:true,
  },
  Details:[{
    type: Schema.Types.ObjectId, ref: 'fd_details',
  }]
})
module.exports = mongoose.model('fd', FDSchema);