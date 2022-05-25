const Router = require('express');
const stockcontroller = require('../controller/stockcontroller');
const router = Router();

router.post('/', stockcontroller.AddStock);
router.post('/get', stockcontroller.getStocks);

module.exports = router;