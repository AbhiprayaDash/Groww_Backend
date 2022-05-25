const Router = require('express');
const fdcontroller = require('../controller/fdcontroller');
const router = Router();

router.post('/', fdcontroller.AddFd);

module.exports = router;