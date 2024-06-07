const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');
const app = express();


app.use(cors());

app.use('/customer', proxy('http://localhost:8001'))
app.use('/shopping', proxy('http://localhost:8003'))
app.use('/', proxy('http://localhost:8002'))


app.listen(8000, () => {
    console.log('Common API Gateway running on 8000')
})