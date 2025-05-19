const mongoose = require('mongoose')

const connectmongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("mongodb database is connected");
        })
        .catch((error) => {
            throw new Error("mongodb database is npot connected",error.message)
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectmongoDB;