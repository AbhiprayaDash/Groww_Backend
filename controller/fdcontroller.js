const fddetails = require("../models/fddetails");
const fixeddeposit = require("../models/fixeddeposit");

const AddFd = async (req, res) => {
  try {
    const fdinfo = await fddetails.create({
      InterestRate: req.body.InterestRate,
      tenure: req.body.tenure });
    const fdres = await fixeddeposit.findOne({ BankName: req.body.BankName });
    let fddetailsArr;
    if (!fdres) { // if that bank name is not present create One
      const result = await fixeddeposit.create({
        BankName: req.body.BankName,
      });
      fddetailsArr = result.Details;
      fddetailsArr.push(fdinfo);
    }
    else { 
      fddetailsArr = fdres.Details;
      fddetailsArr.push(fdinfo);
    }
    await fixeddeposit.findOneAndUpdate(
      { BankName: req.body.BankName },
      { $set: { Details: fddetailsArr } },
    )
    return res.status(201).send('FD added successfully');
  } catch (e) {
    return res.status(400).send(e);
  }
}
module.exports = {AddFd}