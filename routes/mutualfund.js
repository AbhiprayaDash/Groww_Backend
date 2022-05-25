const Router = require('express');
const mfcontroller = require('../controller/mfcontroller')

const router = Router();

router.post('/', mfcontroller.AddMutualFund);
router.post('/mf', mfcontroller.getMutualFunds);
module.exports = router;