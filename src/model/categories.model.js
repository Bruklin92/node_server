const mongoose = require("mongoose");

const { Schema } = mongoose

const categoriesSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        description: {
            type: String,   
            required: true,
            trim: true
        },
        cat_img: {
            type: String,
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

module.exports = mongoose.model("categories", categoriesSchema);