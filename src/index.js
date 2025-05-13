require('dotenv').config()

const express = require('express');
const app = express();

const router = require('./routes/api/v1/index')

// http:localhost:6000
app.use('/api/v1', router);

app.listen(process.env.PORT,() => {
    console.log(`Server started at ${process.env.PORT}`);
});