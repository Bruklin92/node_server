const mongoose = require("mongoose");
const { Schema } = mongoose

const itemSchema = new Schema(
    {
        variant_id: {
            type: mongoose.Types.ObjectId,
            ref: "variants",
            required: true,
        },
        qty: {
            type: Number,
            required: true
        },
    }
)

const ordersSchema = new Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref:  "users",
            required: true
        },
        item:[itemSchema],
        total_amt: {
            type: Number,
            required: true,
            parseInt: true
        },
        discount: {
            type: Number,
            required: true,
            parseInt: true
        },
        status: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        shipping_address: {
            type: String,
            required: true,
            unique: true,
            trim: true
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
);

module.exports = mongoose.model("orders", ordersSchema);