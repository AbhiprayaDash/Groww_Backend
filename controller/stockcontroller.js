const stocks = require('../models/stocks');

const AddStock = async (req, res) => {
    console.log('entered')
  try {
      console.log(stocks)
      console.log(req.body)
    await stocks.create(
      { Name: req.body.name,
        AvgPrice: req.body.avgprice,
        LTP: req.body.ltp,
        MarketCap: req.body.marketcap
      });
    return res.status(201).send('Stock added');
  }
  catch (e) {
    return res.status(400).send(e);
  }
};
const getStocks = async (req, res) => {
  try {
    const stockres = await stocks.find({});
    return res.status(200).send(stockres);
  }
  catch(error)
  {
    return res.status(400).send(error)
  }
};
module.exports = {AddStock, getStocks}; 
