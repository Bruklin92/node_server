
const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantSchema = new Schema (
    {
        v_id: {
            type: mongoose.Types.ObjectId,
            ref: "variant",
            required: true,
        },
        qty: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }   
)

const cartsSchema = new Schema (
    {
        item: [variantSchema],
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

module.exports = mongoose.model("carts", cartsSchema);