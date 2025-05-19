const mongoose = require("mongoose");
const { Schema } = mongoose;

const offersSchema = new Schema(
    {
        categories_id: {
            type: mongoose.Types.ObjectId,
            ref: "categories",
            required: true
        },
        subcategories_id: {
            type: mongoose.Types.ObjectId,
            ref: "subcategories",
            required: true,
        },
        pid: {
            typeL: mongoose.Types.ObjectId,
            ref: "products",
            required: true,
        },
        coupan_code: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        expire_date: {
            type: Date,
            required: true,
        },
        percetages: {
            type: Number,
            required: true,
            parseInt: true
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

module.exports = mongoose.model("offers", offersSchema);