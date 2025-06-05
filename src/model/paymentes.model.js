const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentsSchema = new Schema(
    {
        method: {
            type: String,
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
);

module.exports = mongoose.model("payments", paymentsSchema);
