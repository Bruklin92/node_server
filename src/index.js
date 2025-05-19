require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());

const router = require('./routes/api/v1/index');
const connectmongoDB = require('./db/mongoDB');

// http:localhost:6000
app.use('/api/v1', router);
connectmongoDB();

app.listen(process.env.PORT,() => {
    console.log(`Server started at ${process.env.PORT}`);
});