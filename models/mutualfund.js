const mongoose = require('mongoose')
const {Schema} = mongoose

const MutualSchema = new Schema({
    Provider: String,
    RiskType: String,
    Category: String,
    Type: String,
    NAV: Number,
    Rating :Number
});

module.exports = mongoose.model('mutualfund',MutualSchema);