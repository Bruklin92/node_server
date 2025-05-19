const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewsSchema = new Schema (
    {
        products_id: {
            type: mongoose.Types.ObjectId,
            ref: "products",
            required: true
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "users",
            required: true
        },
        heading: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        description: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        rating: {
            type: Number,
            required: true,
            trim: true,
            unique: true
        },
        status: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
      isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false        
    }
)

module.exports = mongoose.model("reviews", reviewsSchema)
