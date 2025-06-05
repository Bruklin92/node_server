
const mongoose = require("mongoose");
const { Schema } = mongoose;

const attributesSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
    }
)

const variantsSchema = new Schema(
    {
        attributes: [attributesSchema],
        isActive: {
            type: Boolean,
            default: true
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("variants", variantsSchema);