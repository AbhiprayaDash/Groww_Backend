const mongoose = require('mongoose');
const {Schema} = mongoose;

const StockSchema = new Schema({
    Name: String,
    AvgPrice: Number,
    LTP: Number,
    MarketCap:String
});

module.exports = mongoose.model('stocks',StockSchema);