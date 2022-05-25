const express = require('express')
const bodyParser = require('body-parser')
const mongoconnection = require('./config/dbconnection')
const app = express();
const port = 3000;
const stockRouter = require('./routes/stocks');
const MutualRouter = require('./routes/mutualfund');
const FDRouter = require('./routes/fixeddeposit')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1/stocks', stockRouter);
app.use('/api/v1/mutual', MutualRouter);
app.use('/api/v1/fixedeposit', FDRouter);

// app.get('/api/')
app.listen(port, async () => {
  await mongoconnection();
  console.log(`Example app listening on port ${port}`)
})