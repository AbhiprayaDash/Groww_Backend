const mutualfund = require('../models/mutualfund');

const AddMutualFund = async (req, res) => {
  try {
    await mutualfund.create({
      Provider: req.body.provider,
      RiskType: req.body.risktype,
      Category: req.body.category,
      Type: req.body.type,
      NAV: req.body.nav,
      Rating: req.body.rating,
    });
    return res.status(201).send('Mutual fund Added');
  } catch (e) {
    return res.status(400).send(e);
  }
}
const getMutualFunds = async (req, res) =>{
  try {
    const mfRes = await mutualfund.find({});
    return res.status(200).send(mfRes);
  }
  catch (error)
  {
    return res.status(400).send(error)
  }
}
module.exports = { AddMutualFund, getMutualFunds };